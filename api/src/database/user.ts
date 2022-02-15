import logger from "@shared/Logger";
import { randomBytes } from "crypto";
import { User, UserClass, user_roles, ResetToken } from "./schema/user";

export function createUser(user: UserClass) {
	return User.create(user);
}

export function getByCredentials(email: any, pw: any) {
	return User.findByCredentials(email, pw);
}

export function getAllUsers() {
	return User.find({}, { name: 1, role: 1 }).lean<UserClass>().exec();
}

export function getAllUsersFull() {
	return User.find({}, { name: 1, role: 1, email: 1 })
		.lean<UserClass>()
		.exec();
}

export async function generateResetToken(email: string) {
	let user = await User.findOne({ email: email }).exec();

	if (user) {
		let token: string = await new Promise((resolve, reject) => {
			randomBytes(48, (err, buf) => {
				if (err) {
					reject(err);
				} else {
					resolve(buf.toString("hex"));
				}
			});
		});
		user.reset = new ResetToken(token, new Date());
		user.markModified("reset");
		await user.save();
		return user;
	} else {
		throw new Error("User does not exist");
	}
}

export async function useResetToken(token: string, password: string) {
	let user = await User.findOne({ "reset.token": token }).exec();
	if (user) {
		let now = new Date();
		let deltaT = now.getTime() - user.reset!.date.getTime();
		let deltaD = deltaT / 1000 / 60 / 60 / 24;
		if (deltaD < 1 && deltaD > 0) {
			user.password = password;
			user.reset = undefined;
			await user.save();
			logger.info(`${user.name} used reset token`);
		}
	} else {
		throw new Error("user not found");
	}
}

export function getUserForests(){
	return User.find({}, {ownedForests: 1}).lean<UserClass>().exec();
}
