import { Router, Request, Response, NextFunction } from "express";
import { getAllPlants, getPlantById } from "../database/plant";
import { Plant } from "../database/schema/plants";

const router: Router = Router();
//mockup
const p1: Plant = {
	commonName: "c1",
	scientificName: "s1",
	layer: "tree",
	treeType: "deciduous",
	maxHeight: "4",
	advantages: [],
	images: [],
};
const p2: Plant = {
	commonName: "c2",
	scientificName: "s2",
	layer: "understory tree",
	treeType: "conifer",
	maxHeight: "2",
	advantages: [],
	images: [],
};
const p3: Plant = {
	commonName: "c3",
	scientificName: "s3",
	layer: "canopy",
	treeType: "evergreen",
	maxHeight: "0",
	advantages: [],
	images: [],
};
const p4: Plant = {
	commonName: "c4",
	scientificName: "s4",
	layer: "shrub",
	treeType: "deciduous",
	maxHeight: "69",
	advantages: [],
	images: [],
};

router.get(
	"/api/plants/",
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			res.send(await getAllPlants());
		} catch (err: any) {
			res.sendStatus(500);
		}
	}
);

// need authentication
router.post("/api/plant", (req: Request, res: Response, next: NextFunction) => {
	res.send([]);
});

router.get(
	"/api/plant/:id",
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			res.send(await getPlantById(req.params.id));
		} catch {
			res.sendStatus(404);
		}
	}
);

export default router;
