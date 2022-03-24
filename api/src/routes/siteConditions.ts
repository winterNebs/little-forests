import { Router, Request, Response, NextFunction } from "express";
import { SiteConditionRule } from "../database/schema/siteConditionRule";

const router: Router = Router();
//mockup

const conditions: SiteConditionRule[] = [
	{
		name: "Slope",
		allowedValues: ["None", "Gentle", "Moderate", "Steep"],
		images: [],
	},
	{
		name: "Soil Drainage",
		allowedValues: [
			"Very Rapid",
			"Rapid",
			"Well",
			"Moderately Well",
			"Imperfect",
			"Poorly Drained",
			"Very Poorly Drained",
		],
		images: [],
	},
	{
		name: "Soil Moisture Regime",
		allowedValues: ["Dry", "Fresh", "Moist", "Wet"],
		images: [],
	},
	{
		name: "Soil Texture",
		allowedValues: [
			"Sandy",
			"Sandy Loam",
			"Loam",
			"Silty Loam",
			"Clay Loam",
			"Clay",
			"Heavy Clay",
		],
		images: [],
	},
	{
		name: "Depth to bedrock",
		allowedValues: ["<16cm", "16 cm - 1m", ">1 meter"],
		images: [],
	},
];

router.get("/api/siteConditions/", (req: Request, res: Response) => {
	res.json(conditions);
});

export default router;
