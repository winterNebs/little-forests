import { Router, Request, Response, NextFunction } from "express";

const router: Router = Router();

router.get("/forests/", (req: Request, res: Response) => {
	res.send({});
});
router.get("/forests/:id", (req: Request, res: Response) => {
	res.send({});
});

router.get(
	"/api/forests/",
	(req: Request, res: Response, next: NextFunction) => {
		res.send([]);
	}
);

// need authentication
router.post(
	"/api/forest",
	(req: Request, res: Response, next: NextFunction) => {
		res.send([]);
	}
);

router.get(
	"/api/forest/:id",
	(req: Request, res: Response, next: NextFunction) => {
		res.send({});
	}
);
export default router;
