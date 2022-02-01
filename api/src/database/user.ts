import { User, UserClass, user_roles, ResetToken } from "./schema/users";

export function createUser(user: UserClass): Promise<UserClass> {
	return User.create(user);
}
