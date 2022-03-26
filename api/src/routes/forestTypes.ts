import { Router, Request, Response, NextFunction } from "express";
import { getAllForestTypes, getForestTypeByID } from "../database/forestTypes";
import { ForestType } from "../database/schema/forestType";

const router: Router = Router();
const f1: ForestType = {
	name: "forestType1",
	siteConditions: [],
	layersRatio: [[1, 1]],
	domSpecies: [],
	images: [],
	active: true,
};
const f2: ForestType = {
	name: "forestType2",
	siteConditions: [],
	layersRatio: [[2, 2]],
	domSpecies: [],
	images: [],
	active: true,
};
const f3: ForestType = {
	name: "forestType3",
	siteConditions: [],
	layersRatio: [[3, 3]],
	domSpecies: [],
	images: [],
	active: true,
};

router.get(
	"/api/forests/",
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			res.send(await getAllForestTypes());
		} catch {
			res.sendStatus(500);
		}
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
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			res.send(await getForestTypeByID(req.params.id));
		} catch {
			res.sendStatus(404);
		}
	}
);
export default router;
