import { Router, Request, Response, NextFunction } from "express";
import { getAllPlants, getPlantById } from "src/database/plant";
import { Plant } from "src/database/schema/plants";

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

router.get("/plants/", (req: Request, res: Response) => {
	res.send({ p1, p2, p3, p4 });
});
router.get("/plant/:id", (req: Request, res: Response) => {
	res.send(p1);
});

router.get(
	"/api/plants/",
	(req: Request, res: Response, next: NextFunction) => {
		res.send({ p1, p2, p3, p4 });
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
