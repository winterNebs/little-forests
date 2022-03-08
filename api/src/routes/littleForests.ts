import { Router, Request, Response, NextFunction } from "express";
import { LittleForest } from "src/database/schema/littleForests";

const router: Router = Router();

//mockup
const lf1: LittleForest = {name: 'name1', siteConditions: [], forestType: {name: 'forestType1', siteConditions: [], layersRatio: [[1, 1]], domSpecies: [], images: [], active: true}, plants: [], isPublic: true, images: []};
const lf2: LittleForest = {name: 'name2', siteConditions: [], forestType: {name: 'forestType1', siteConditions: [], layersRatio: [[1, 1]], domSpecies: [], images: [], active: true}, plants: [], isPublic: false, images: []};

router.get("/little-forests/", (req: Request, res: Response) => {
	res.send({lf1, lf2});
});
router.get("/little-forest/:id", (req: Request, res: Response) => {
	res.send(lf1);
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
