import { Request, Response, NextFunction } from "express";

export function notFoundHandler(
	req: Request,
	res: Response,
	next: NextFunction
) {
	let err: any = new Error("Not Found");
	err.status = 404;
	next(err);
}

export function errorHandler(
	err: any,
	req: Request,
	res: Response,
	next: NextFunction
) {
	res.status(err.status || 500);
	let message: string = "";
	let desc: string = "";
	if (!err.message) {
		switch (res.statusCode) {
			case 400:
				message = "400 Bad Request";
				desc = "";
				break;
			case 401:
				message = "401 Unauthorized";
				desc = "";
				break;
			case 404:
				message = "404 Not Found";
				desc = "";
				break;
			case 422:
				message = "422";
				desc = "";
				break;
			case 500:
				message = "500 Internal Server Error";
				desc = "";
				break;
			default:
				message = err.message;
				desc = "";
				break;
		}
		res.send({
			message: message,
			error: {},
			// error: err,
			desc: desc,
		});
	} else {
		res.send({
			message: err.message,
			error: {},
			// error: err,
			desc: "",
		});
	}
}
