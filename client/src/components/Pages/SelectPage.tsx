import React from 'react';
import { Grid, Stack, Box } from "@mui/material";
import ProgressStepper from "../ProgressStepper";
import "@fontsource/roboto";
import ConditionContainer from "../ConditionContainer";
import AccountHeader from "../common/AccountHeader";
import { useState, useEffect } from "react";
import ForestTypeContainer from '../ForestTypeContainer';

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
interface SiteConditionList extends Array<SiteConditionValues> {}

// List to hold the values of the current suggested forest list
const currForestResults:ForestContainerValues[] = []

// Build our component
export default function SelectPage() {

	// Use State to track the selected radio buttons
	const [selectedConditionValues, setSelectedValue] = useState([]);

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
