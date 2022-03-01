import { Router, Request, Response, NextFunction } from "express";
import { getAllForestTypes, getForestTypeByID } from "src/database/forestTypes";

const router: Router = Router();

router.get("/forests/", (req: Request, res: Response) => {
	res.send(getAllForestTypes());
});
router.get("/forests/:id", (req: Request, res: Response) => {
	res.send(getForestTypeByID(req.params.id));
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
