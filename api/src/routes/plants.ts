import { Router, Request, Response, NextFunction } from "express";
import { getAllPlants, getPlantById } from "src/database/plant";

const router: Router = Router();

router.get("/plants/", (req: Request, res: Response) => {
	res.send(getAllPlants());
});
router.get("/plant/:id", (req: Request, res: Response) => {
	res.send(getPlantById(req.params.id));
});

router.get(
	"/api/plants/",
	(req: Request, res: Response, next: NextFunction) => {
		res.send([]);
	}
);

// need authentication
router.post("/api/plant", (req: Request, res: Response, next: NextFunction) => {
	res.send([]);
});

router.get(
	"/api/plant/:id",
	(req: Request, res: Response, next: NextFunction) => {
		res.send({});
	}
);
export default router;
