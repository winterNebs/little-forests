import { useState, useEffect } from 'react';
import { Grid, Stack, TextField, IconButton, Modal, Box } from "@mui/material";
import { AddCircleOutline } from "@mui/icons-material";
import { SelectorBoxValues } from './Pages/PlanPage';
import { Plant, Plants } from '../../../api/src/database/schema/plants';
import placeholderImage from '../placeholder.jpg';
import PlantItem from './PlantItem';

export interface PlantItemValues {
    commonPlantName: string
    sciPlantName: string
    plantUse: string
    plantQuantity?: number;
    adderFunc?: Function;
}

function SelectorBox(props: SelectorBoxValues) {

    // Use State to open a modal to select a new plant
    const [open, setOpen] = useState(false);

    // Functions to handle opening and closing the modal
    const handleClose = () => { setOpen(false) }
    const handleOpen = () => { setOpen(true) }

    // Use State to update the avialable list of plants that can be selected
    const [availablePlantList, setPlantList]: [Plant[], Function] = useState<Plant[]>([]);

    // Gather the list of plants
    useEffect(() => {
        console.log(process.env);
        // Fetch the forests
		fetch(process.env.REACT_APP_API + "/api/plants")
			.then((res) => res.json())
			.then((data) => {
				setPlantList(data);
				console.log(data);
				console.log(availablePlantList);
			})
            .catch(console.log);

	}, []);


    // Function to append a new plant
    const appendPlant = (plantName: string) => {
        // Push to the passed list 
        props.selectorList.push(plantName);
        // Pass the accompanying quantity - defaults to 1
        props.selectorList.push(1);

        // Remove the selected plant from the list of available plants
        for (let loopCount = 0; loopCount < availablePlantList.length; loopCount++) { 
            // If the plantName matches, then remove from the available list
            if (availablePlantList[loopCount].commonName === plantName) {
                availablePlantList.splice(loopCount, 1);
            }
        }
    }

    // Function to remove a plant from the list
    const removePlant = ( plantName: string ) => {
        // For loop to iterate through the list
        for (let loopCount = 0; loopCount < props.selectorList.length; loopCount++) { 
            // Compare the values
            if (props.selectorList[loopCount] === plantName) { 
                // If match, then remove the list along with the quantity 
                props.selectorList.splice(loopCount, 2);
            }
        }
    }

	return (
		<>
            <Stack>
                <h2 className="box-header">{props.title}</h2>
                <Grid container>
                    <Grid item xs={7}>
                        <h3>Plant</h3>
                    </Grid>

                    <Grid item xs={5}>
                        <h3>Quantity</h3>
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={11}>
                        <Stack>

                            
                            <Grid container>
                                <Grid item xs={1}>
                                    <IconButton>
                                        <AddCircleOutline fontSize="large" onClick={ handleOpen } />
                                    </IconButton>
                                </Grid>
                                <Grid item xs={4.5} alignItems="left">
                                    <h3>Add new plant to list</h3>
                                </Grid>
                            </Grid>

                        </Stack>
                    </Grid>
                </Grid>
            </Stack>

            <Modal
                open={open}
                onClose={handleClose}
                sx={{ alignItems: "center", justifyContent: "center" }}
            >
                <Box sx={{
                width: "70vw",
                backgroundColor: "white",
                borderRadius: "25px",
                marginLeft: "40vw",
                }}>

                    {availablePlantList.map((plantDisplay) => (
                        <PlantItem
                            commonPlantName={plantDisplay.commonName}
                            sciPlantName={plantDisplay.scientificName}
                            plantUse="addition"
                            adderFunc={appendPlant} />
                    ))}

                </Box>
            </Modal>
		</>
	);
};

export { SelectorBox as default };
