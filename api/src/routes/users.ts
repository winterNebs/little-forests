import logger from "@shared/Logger";
import { Router, Request, Response, NextFunction } from "express";
import { UserClass } from "../database/schema/user";
import { createUser } from "../database/user";
import { DocumentType } from "@typegoose/typegoose";
import {
	useResetToken,
	getByCredentials,
	generateResetToken,
} from "../database/user";
import { isLoggedIn } from "../middleware/passportAuth";
import passport from "passport";

const router: Router = Router();

router.post(
	"/api/users/logout",
	(req: Request, res: Response, next: NextFunction) => {
		try {
			req.logout();
			if (req.session) {
				req.session.destroy((err: any) => {
					if (err) {
						logger.warn(["logout error", err]);
					}
				});
			}
			res.redirect("/");
		} catch (err: any) {
			err.status = 500;
			next(err);
		}
	}
);

router.get("/api/users/loggedin", isLoggedIn, (req: Request, res: Response) => {
	res.sendStatus(200);
});
// TODO:
// Email validation
// Username validation
// Proper Error Messages
router.post(
	"/api/users/register",
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			if (req.body.name && req.body.email && req.body.password) {
				await createUser(req.body);
				res.sendStatus(201);
			} else {
				res.sendStatus(400);
			}
		} catch (err: any) {
			if (err.name === "MongoError" && err.code === 11000) {
				let errmsg: string = "";
				for (let i in err.keyValue) {
					if (err.keyValue.hasOwnProperty(i)) {
						errmsg += i + " is already taken \n";
					}
				}
				res.status(400).send(errmsg);
			} else if (err.name === "ValidationError") {
				let errmsg: string = "";
				for (let i in err.errors) {
					if (err.errors.hasOwnProperty(i)) {
						switch (i) {
							case "password":
								errmsg +=
									"Password must be at least 7 characters\n";
								break;
							case "name":
								errmsg +=
									"Name must be between 3-20 characters\n";
								break;
							case "email":
								errmsg += "Invalid Email\n";
								break;
						}
					}
				}
				res.status(422).send(errmsg);
			} else {
				logger.warn(err);
				res.status(500).send(err);
			}
		}
	}
);

router.post(
	"/api/users/login",
	passport.authenticate("local"),
	(req: Request, res: Response, next: NextFunction) => {
		if (req.isAuthenticated()) {
			if (req.session) {
				if (req.body.remember) {
					let time = 1000 * 60 * 60 * 24 * 30 * 3;
					req.session.cookie.maxAge = time;
				} else {
					req.session.cookie.expires = undefined;
				}
			}
			res.sendStatus(200);
		} else {
			res.status(400).send("Invalid Email/Password");
		}
	}
);
router.post(
	"/api/users/changePassword",
	isLoggedIn,
	async (req: Request, res: Response, next: NextFunction) => {
		if (req.user) {
			try {
				let user: DocumentType<UserClass> = await getByCredentials(
					(req.user as any).email,
					req.body.password
				);
				user.password = req.body.newPassword;
				await user.save();
				logger.info(["Password Changed", (req.user as any).email]);
				res.sendStatus(200);
			} catch (err: any) {
				if (err.name === "ValidationError") {
					let errmsg: string = "";
					for (let i in err.errors) {
						if (err.errors.hasOwnProperty(i)) {
							if (i === "password") {
								errmsg +=
									"Password must be at least 7 characters\n";
							} else if (i === "name") {
								errmsg +=
									"Name must be between 3-20 characters\n";
							}
						}
					}
					res.status(422).send(errmsg);
				} else {
					err.status = 422;
					res.status(422).send("Incorrect Password");
				}
			}
		} else {
			res.sendStatus(500);
		}
	}
);
router.post(
	"/api/users/forgotPassword",
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			let user = await generateResetToken(req.body.email);
			logger.info([
				"Reset token generated",
				user.email,
				user.reset!.token,
			]);
			// Emails?
			res.sendStatus(200);
		} catch (err: any) {
			logger.warn(err);
			err.status = 422;
			res.sendStatus(422);
		}
	}
);
router.post(
	"/api/users/resetPassword",
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			await useResetToken(req.body.token, req.body.password);
			res.sendStatus(200);
		} catch (err: any) {
			if (err.name === "ValidationError") {
				let errmsg: string = "";
				for (let i in err.errors) {
					if (err.errors.hasOwnProperty(i)) {
						if (i === "password") {
							errmsg +=
								"Password must be at least 7 characters\n";
						} else if (i === "name") {
							errmsg += "Name must be between 3-20 characters\n";
						}
					}
				}
				res.status(422).send(errmsg);
			} else {
				err.status = 422;
				res.status(422).send("Invalid token");
			}
		}
	}
);
export default router;
