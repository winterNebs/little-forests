import React from 'react';
import { Grid, Stack, Box } from "@mui/material";
import ProgressStepper from "../ProgressStepper";
import "@fontsource/roboto";
import ConditionContainer from "../ConditionContainer";
import AccountHeader from "../common/AccountHeader";
import { useState, useEffect } from "react";
import ForestTypeContainer from '../ForestTypeContainer';

// Create our steps
const steps = ["Input", "Results", "Plan", "Plant"];


// Interface for the values that will be within each container - for passing into our map
export interface ContainerValues {
	title: string;
	description: string;
	siteConditions: SiteConditionValues[];
	radioHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	groupSelectedValue?: string;
}

// Interface for site conditions
export interface SiteConditionValues {
	subtitle: string;
	imageURL?: string;
}

export interface ForestContainerValues {
	title: string;
	description: string;
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

// Test Forest Type
const testForest: ForestContainerValues = {
    title: "Test Forest", 
    description: "This is the test for short description of this forest type."
}

// List to hold the values of the current suggested forest list
const currForestResults:ForestContainerValues[] = [testForest]

// Constant to hold the currently selected site conditions
const currSelectedConditions: string[] = []

// Build our component
export default function BuilderPage() {

	// Use State to track the selected radio buttons
	const [selectedValue, setSelectedValue] = React.useState("default");

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedValue(event.target.value);
	};

	// Retrieve the site conditions from React
	const [conditions, setConditions]: [any, Function] = useState([]);
	useEffect(() => {
		console.log(process.env);
		fetch(process.env.REACT_APP_API + "/api/siteConditions")
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
            style = {{ marginTop: '10vh', marginBottom: '20vh'}}
            justifyContent = "center"
            alignItems = "stretch"
            direction = "row"
            >
                <Grid item xs={12}>
                    <h2>Little Forest Builder</h2>
                </Grid>
                
                <Grid item xs={12}>
                    <ProgressStepper />
                </Grid> 
                <Grid item xs={3} />
                <Grid item xs={6} />
                <Grid item xs={3} />

                <Grid item xs={0.4} />
                <Grid item xs={8}>
                    <Stack>
                        {pageContainers.map( displayContainer =>(
							<ConditionContainer 
							key={displayContainer.title}
                            title={displayContainer.title} 
                            description={displayContainer.description} 
							siteConditions={displayContainer.siteConditions}
							radioHandler={handleChange}
							groupSelectedValue={selectedValue}
                            />
                        ))}
                    </Stack>
                </Grid>
                <Grid item xs={2}>
                    <Box
                      sx = {{
                          overflowY: "scroll",
                          backgroundColor: "#e0e0e0",
                          marginRight: "6vw",
                          marginTop: "5vh", 
                          marginLeft: "1vw",
                          height: "60vh",
                          position: "fixed"
                      }}
                    >
                    { currForestResults.length === 0 ? (
                            <>  
                                <h3>No inputs selected, results will be displayed here as you select site conditions!</h3>
                            </>
                        ) : (
                            <>
                            
                                <Stack>
                                    {currForestResults.map ( displayResult =>(
                                        <ForestTypeContainer 
                                        title={displayResult.title} 
                                        description = {displayResult.description}
                                        />
                                        )
                                    
                                    )}
                                </Stack>
                            </>
                        )
                    }
                    </Box>
                </Grid>
                <Grid item xs={1} />
            </Grid>
		</>
	);

};
