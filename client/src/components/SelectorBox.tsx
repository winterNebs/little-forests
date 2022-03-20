import { Grid, Stack, TextField, IconButton } from "@mui/material";
import { AddCircleOutline } from "@mui/icons-material";
import placeholderImage from '../placeholder.jpg';
import PlantItem from './PlantItem';

interface props {
    title: string
}

function SelectorBox(props: props) {

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
                            <PlantItem commonPlantName="Common Plant Name" sciPlantName="Scientific Name" plantUse="quantitySelect" />
                            
                            <Grid container>
                                <Grid item xs={1}>
                                    <IconButton>
                                        <AddCircleOutline fontSize="large" />
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
		</>
	);
};

export { SelectorBox as default };
