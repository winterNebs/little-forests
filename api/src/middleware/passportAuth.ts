import passport from "passport";
import { User, UserClass } from "../database/schema/user";
import { DocumentType } from "@typegoose/typegoose";
import { Strategy } from "passport-local";
import { Request, Response, NextFunction } from "express";
import { getByCredentials } from "../database/user";
import logger from "@shared/Logger";

passport.serializeUser(function (user: any, done: any): void {
	done(null, user.id);
});
// TODO: double check async awaits here
passport.deserializeUser(function (id: string, done: any): void {
	User.findById(id, (err: any, user: DocumentType<UserClass>): void => {
		user.last_seen = new Date();
		user.save();
		done(err, user);
	});
});

passport.use(
	"local",
	new Strategy(
		{
			usernameField: "email",
			passwordField: "password",
			passReqToCallback: true,
		},
		async function (
			req: Request,
			username: string,
			password: string,
			done: any
		) {
			let user = await getByCredentials(username, password);
			if (user) {
				logger.info(["logged in", username]);
				user.last_seen = new Date();
				user.save();
				return done(null, user);
			} else {
				logger.info(["Login failed", username, req.ip]);
				return done(null, false, { message: "Invalid Credentials" });
			}
		}
	)
);

export function isLoggedIn(
	req: Request,
	res: Response,
	next: NextFunction
): void {
	if (req.isAuthenticated()) {
		next();
	} else {
		res.redirect("/login");
	}
}
