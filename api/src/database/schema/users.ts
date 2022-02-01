import {
	index,
	prop,
	pre,
	DocumentType,
	ReturnModelType,
	getModelForClass,
} from "@typegoose/typegoose";
import { hash, compare } from "bcrypt";
import { Model, Schema } from "mongoose";
export const user_roles: readonly ["admin", "editor", "user"] = [
	"admin",
	"editor",
	"user",
];
export class ResetToken {
	@prop()
	public token: string;
	@prop()
	public date: Date;
	public constructor(token: string, date: Date) {
		this.token = token;
		this.date = date;
	}
}
@pre<UserClass>("save", async function (next: Function): Promise<void> {
	const user: any = this;
	if (user.isModified("password")) {
		user.password = await hash(user.password, 8);
	}
	next();
})
@index({ name: 1 }, { collation: { locale: "en", strength: 1 }, unique: true })
export class UserClass {
	@prop({
		required: true,
		trim: true,
		unique: true,
		minlength: 3,
		maxlength: 20,
	})
	public name!: string;
	@prop({
		required: true,
		lowercase: true,
		unique: true,
	})
	public email!: string;
	@prop({ required: true, minlength: 7 })
	public password!: string;
	@prop({
		enum: user_roles,
	})
	public role?: string;
	@prop()
	public last_seen?: Date;
	@prop({ _id: false })
	public reset?: ResetToken;
	@prop()
	public static findByCredentials: Function = async function (
		name: string,
		password: string
	): Promise<DocumentType<UserClass>> {
		// search for a user by email and password.
		try {
			const user: DocumentType<UserClass> | null = await User.findOne({
				name: name,
			})
				.collation({ locale: "en", strength: 1 })
				.exec();
			if (!user) {
				throw new Error("Invalid login credentials");
			}
			if (user.password) {
				const isPasswordMatch: boolean = await compare(
					password,
					user.password
				);
				if (!isPasswordMatch) {
					throw new Error("Invalid login credentials");
				}
			} else {
				throw new Error("Invalid login credentials");
			}
			return user;
		} catch (err) {
			throw new Error("Invalid login credentials");
		}
	};
}

export const User: ReturnModelType<
	typeof UserClass,
	{}
> = getModelForClass(UserClass, { schemaOptions: { collection: "users" } });
