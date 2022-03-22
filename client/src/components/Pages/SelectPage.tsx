import React from 'react';
import { Grid, Stack, Box } from "@mui/material";
import ProgressStepper from "../ProgressStepper";
import "@fontsource/roboto";
import ConditionContainer from "../ConditionContainer";
import AccountHeader from "../common/AccountHeader";
import { useState, useEffect } from "react";
import ForestTypeContainer from '../ForestTypeContainer';
import { FenceTwoTone } from '@mui/icons-material';

// Interface for the values that will be within each container - for passing into our map
export interface ContainerValues {
	title: string;
	siteConditions: SiteConditionValues[];
	setSelectedValue?: Function;
	selectedValues?: any;
}

// Interface for site conditions
export interface SiteConditionValues {
	subtitle: string;
	imageURL?: string;
}

export interface ForestContainerValues {
	name: string;
	imageURL?: string;
	setForestValue?: Function;
}

// Create a list version of Site Condition Values
interface SiteConditionList extends Array<SiteConditionValues> {}let currForestResults:ForestContainerValues[] = []

// Build our component
export default function SelectPage() {

	// Use State to track the selected radio buttons
	const [selectedConditionValues, setSelectedValue] = useState<string[]>([]);

	// Use State to track the selection of radio buttons 
	const handleRadioSelect = (key: string, value: string) => {
		// If the list is empty, then enter the first value automatically 
		if (selectedConditionValues.length === 0) {
			// Add the key then the value to the list 
			selectedConditionValues.push(key);
			selectedConditionValues.push(value);
		}
		// If there is any length to the selected values
		else {
			// Iterate through the list 
			for (var loopCount = 0; loopCount < selectedConditionValues.length; loopCount++) {
				// Check if the value matches the key 
				if (key === selectedConditionValues[loopCount]) {
					// Update the next value in the list 
					selectedConditionValues[loopCount + 1] = value;
				}
			}
		}

		// After we have created/updated our list, we then request the little forests that match the conditions
		fetch(process.env.REACT_APP_API + "/api/forests")
		.then((res) => res.json())
			.then((data) => {
				currForestResults = data;
				console.log(data);
				console.log(conditions);
			})
			.catch(console.log);
	}

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

	const [selectedForestType, setSelectedForestType] = useState('default');

	// Function that will update the selected button
	const handleForestSelect = (forestSelected: string) => {
		setSelectedForestType(forestSelected);

		// Redirect to the planning page with this data selected
		
	}

	return (
		<>
			<AccountHeader />
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
						{conditions.map((displayContainer: { name: string; siteConditions: SiteConditionValues[]; }) =>(
							<ConditionContainer 
							key={displayContainer.name}
							title={displayContainer.name} 
							siteConditions={displayContainer.siteConditions}
							setSelectedValue={setSelectedValue}
							selectedValues={selectedConditionValues}
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
									{conditions.map((forestType: { name: string; }) =>(
										<ForestTypeContainer 
										key={forestType.name}
										name={forestType.name} 
										setForestValue={handleForestSelect}
										/>
									))}
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
