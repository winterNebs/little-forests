import { Router, Request, Response, NextFunction } from "express";

const router: Router = Router();

router.get("/little-forests/", (req: Request, res: Response) => {
	res.send({});
});
router.get("/little-forest/:id", (req: Request, res: Response) => {
	res.send({});
});

router.get(
	"/api/little-forests/",
	(req: Request, res: Response, next: NextFunction) => {
		res.send([]);
	}
);

// need authentication
router.post(
	"/api/little-forest",
	(req: Request, res: Response, next: NextFunction) => {
		res.send([]);
	}
);

router.get(
	"/api/little-forest/:id",
	(req: Request, res: Response, next: NextFunction) => {
		res.send({});
	}
);
export default router;
