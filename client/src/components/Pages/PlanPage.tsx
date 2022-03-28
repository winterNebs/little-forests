import { useState, useEffect } from "react";
import { Grid, Button, Stack, Modal, Box } from "@mui/material";
import SelectorBox from "../SelectorBox";
import AccountHeader from "../common/AccountHeader";
import PlantItem from "../PlantItem";
import { useParams } from "react-router-dom";

// Interface for the selector boxes
export interface SelectorBoxValues {
	title: string;
	selectorList: any[];
	openFunc: Function;
	closeFunc: Function;
}

// Build our component
export default function PlanPage() {
	let displayList: any[] = [];

	// Use State to open a modal to select a new plant
	const [open, setOpen] = useState(false);

	// Functions to handle opening and closing the modal
	const handleClose = () => {
		setOpen(false);
	};
	const handleOpen = (availablePlantList: any[]) => {
		setOpen(true);
		displayList = availablePlantList;
	};

	// Retrieve the forest type using the passed name
	const { typeid } = useParams();

	// We need to track the list of selected plants for each category and their related quantity
	const treeList: any[] = [];
	const shrubList: any[] = [];
	const canopyList: any[] = [];
	const understoryList: any[] = [];

	let currLength: number =
		treeList.length +
		shrubList.length +
		canopyList.length +
		understoryList.length;

	// Use a get request to get the selected forest and plant list
	const [forestType, setForestType] = useState();
	const [plantList, setPlantList] = useState([]);
	useEffect(() => {
		console.log(process.env);
		// Fetch the forests
		fetch(process.env.REACT_APP_API + "/api/forest/" + typeid)
			.then((res) => res.json())
			.then((data) => {
				setForestType(data);
				console.log(data);
				console.log(forestType);
			})
			.catch(console.log);

		// Fetch the plant lists
		fetch(process.env.REACT_APP_API + "/api/plants") // Route for the plant list based on the forest type?
			.then((res) => res.json())
			.then((data) => {
				setPlantList(data);
				console.log(data);
				console.log(plantList);
			});
	}, []);

	// Function that will handle the submission of Litte Forest information
	const handleSubmit = async function (
		event: React.FormEvent<HTMLFormElement>
	) {
		event.preventDefault();
		try {
			let res = await fetch(
				process.env.REACT_APP_API + "/api/little-forest",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						// TODO - how to parse the information for the route
					}),
				}
			);

			if (res.status === 201) {
				console.log("Little Forest successfully created");
			} else {
				console.log(await res.text());
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<AccountHeader />
			<Grid container className="screen-padded">
				<Grid item xs={2} />
				<Grid item xs={8}>
					<Stack spacing={3}>
						<SelectorBox
							title="Trees"
							selectorList={treeList}
							openFunc={handleOpen}
							closeFunc={handleClose}
						/>
						<SelectorBox
							title="Shrub"
							selectorList={shrubList}
							openFunc={handleOpen}
							closeFunc={handleClose}
						/>
						<SelectorBox
							title="Canopy"
							selectorList={canopyList}
							openFunc={handleOpen}
							closeFunc={handleClose}
						/>
						<SelectorBox
							title="Understory"
							selectorList={understoryList}
							openFunc={handleOpen}
							closeFunc={handleClose}
						/>
					</Stack>
				</Grid>
				<Grid item xs={2}>
					<Button disabled />
					{/* {currLength === 0 ? 
                            <Button disabled>Confirm Selection</Button>    
                        :   <Button>Confirm Selection</Button>
                    } */}
				</Grid>
			</Grid>

			<Modal
				open={open}
				onClose={handleClose}
				sx={{ alignItems: "center", justifyContent: "center" }}
			>
				<Box
					sx={{
						width: "70vw",
						backgroundColor: "white",
						borderRadius: "25px",
						marginLeft: "40vw",
					}}
				>
					{displayList.map((plantDisplay) => (
						<PlantItem
							commonPlantName={plantDisplay.commonName}
							sciPlantName={plantDisplay.scientificName}
							plantUse="addition"
						/>
					))}
				</Box>
			</Modal>
		</>
	);
}

