import { Grid, Stack } from "@mui/material";
import ProgressStepper from "../ProgressStepper";
import "@fontsource/roboto";
import ConditionContainer from "../ConditionContainer";
import { useState, useEffect } from "react";

// Create our steps
const steps = ["Input", "Results", "Plan", "Plant"];

// Interface for the values that will be within each container - for passing into our map
export interface ContainerValues {
	title: string;
	description: string;
	siteConditions: SiteConditionValues[];
}

// Interface for site conditions
export interface SiteConditionValues {
	subtitle: string;
	imageURL?: string;
}

// Create a list version of Site Condition Values
interface SiteConditionList extends Array<SiteConditionValues> {}

// Slope Site Condition List
const slopeConditions: SiteConditionValues[] = [
	{ subtitle: "None" },
	{ subtitle: "Gentle" },
	{ subtitle: "Moderate" },
	{ subtitle: "Steep" },
];

// Slope container props
const slopeContainer: ContainerValues = {
	title: "Slope",
	description:
		"Select the slope gradient that best describes where your Little Forest will be planted",
	siteConditions: slopeConditions,
};

// Soil Drainage Condition List
const drainageConditions: SiteConditionValues[] = [
	{ subtitle: "Very Rapid" },
	{ subtitle: "Rapid" },
	{ subtitle: "Well" },
	{ subtitle: "Moderately Well" },
	{ subtitle: "Imperfect" },
	{ subtitle: "Poorly Drained" },
	{ subtitle: "Very Poorly Drained" },
];

// Drainage container props
const drainageContainer: ContainerValues = {
	title: "Soil Drainage",
	description:
		"Select the option that best describes the soil drainage of the soil that you are planting your Little Forest in",
	siteConditions: drainageConditions,
};

// Soil Moisture Regime Condition List
const moistureConditions: SiteConditionValues[] = [
	{ subtitle: "Dry" },
	{ subtitle: "Fresh" },
	{ subtitle: "Moist" },
	{ subtitle: "Wet" },
];

// Moisture container props
const moistureContainer: ContainerValues = {
	title: "Soil Moisture Regime",
	description:
		"Select the option that best describes the moisture regime of the soil that you are planting your Little Forest in",
	siteConditions: moistureConditions,
};

// Soil Texture Condition List
const textureConditions: SiteConditionValues[] = [
	{ subtitle: "Sandy" },
	{ subtitle: "Sandy Loam" },
	{ subtitle: "Loam" },
	{ subtitle: "Silty Loam" },
	{ subtitle: "Clay Loam" },
	{ subtitle: "Clay" },
	{ subtitle: "Heavy Clay" },
];

// Drainage container props
const textureContainer: ContainerValues = {
	title: "Soil Texture",
	description:
		"Select the option that best describes the texture of the soil that you are planting your Little Forest in",
	siteConditions: textureConditions,
};

// Depth to Bedrock Condition List
const bedrockConditions: SiteConditionValues[] = [
	{ subtitle: "Less than 16 cm" },
	{ subtitle: "16cm - 1m" },
	{ subtitle: "More than 1m" },
];

// Bedrock Depth container props
const bedrockContainer: ContainerValues = {
	title: "Depth to Bedrock",
	description:
		"Select the depth from bedrock that your Little Forest will be grown from",
	siteConditions: bedrockConditions,
};

// List our containers
const pageContainers: ContainerValues[] = [
	slopeContainer,
	drainageContainer,
	moistureContainer,
	textureContainer,
	bedrockContainer,
];

// Build our component
export default function BuilderPage() {
	const [conditions, setConditions]: [any, Function] = useState([]);
	useEffect(() => {
		console.log("test");
		fetch("http://localhost:3000/api/siteConditions")
			.then((res) => res.json())
			.then((data) => {
				setConditions(data);
				console.log(data);
				console.log(conditions);
			})
			.catch(console.log);
	}, []);

	return (
		<>
			<Grid
				container
				style={{ marginTop: "10vh", marginBottom: "20vh" }}
				justifyContent="center"
				alignItems="stretch"
				direction="row"
			>
				<Grid item xs={12}>
					<h2>Little Forest Builder</h2>
				</Grid>

				<Grid item xs={12}>
					<ProgressStepper />
				</Grid>
				<Grid item xs={3} />
				<Grid item xs={6}></Grid>
				<Grid item xs={3} />

				<Grid item xs={8}>
					<Stack>
						{conditions.map((displayContainer: any) => (
							<ConditionContainer
								title={displayContainer.name}
								description={"Description"}
								siteConditions={displayContainer.allowedValues.map(
									function (v: any) {
										return { subtitle: v };
									}
								)}
							/>
						))}
					</Stack>
				</Grid>
			</Grid>
		</>
	);
}
//export { BuilderPage as default };

