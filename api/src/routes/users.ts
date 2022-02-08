import logger from "@shared/Logger";
import { Router, Request, Response, NextFunction } from "express";
import { UserClass } from "src/database/schema/user";
import { createUser } from "../database/user";

const router: Router = Router();

router.get("/register", (req: Request, res: Response) => {
	res.send("Register");
});

router.get("/login", (req: Request, res: Response) => {
	res.send("Login");
});

router.get("/forgot", (req: Request, res: Response) => {
	res.send("Forgot pass");
});

router.get("/logout", (req: Request, res: Response) => {
	res.send("logout");
});

router.post(
	"/api/users/register",
	(req: Request, res: Response, next: NextFunction) => {
		try {
			createUser(req.body);
			res.send({});
		} catch (err) {
			logger.warn(err);
		}
	}
);

router.post(
	"/api/users/login",
	(req: Request, res: Response, next: NextFunction) => {
		res.send("logged in");
	}
);
router.post(
	"/api/users/changePassword",
	(req: Request, res: Response, next: NextFunction) => {
		res.send("pw change");
	}
);
router.post(
	"/api/users/forgotPassword",
	(req: Request, res: Response, next: NextFunction) => {
		res.send("forgot");
	}
);
router.post(
	"/api/users/resetPassword",
	(req: Request, res: Response, next: NextFunction) => {
		res.send("reset");
	}
);
export default router;
