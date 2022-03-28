import { Grid, Paper, Radio, Stack } from "@mui/material";
import { ContainerValues } from "./Pages/SelectPage";
import { useState, ChangeEvent } from "react";
import placeholderImage from "../placeholder.jpg";

function ConditionContainer(props: ContainerValues) {
	const [containerValue, setContainerValue] = useState("default");

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		// We want to append our container value to the state in the parent
		setContainerValue(event.target.value);
	};

	return (
		<>
			<Paper elevation={12} style={{ marginTop: "5vh" }}>
				<Grid
					container
					justifyContent="center"
					alignItems="stretch"
					direction="row"
				>
					<Grid item xs={12}>
						<h3>{props.title}</h3>
					</Grid>

					{props.siteConditions.map((condition) => (
						<Grid key={condition.subtitle} item xs={3}>
							<Stack spacing={-0.5}>
								{typeof condition.imageURL !== "undefined" ? (
									<>
										<img
											className="condition-thumbnail"
											src={condition.imageURL}
										/>
										<h4>{condition.subtitle}</h4>
									</>
								) : (
									<>
										<img
											className="condition-thumbnail"
											src={placeholderImage}
										/>
										<h4>{condition.subtitle}</h4>
									</>
								)}
								<Radio
									checked={
										containerValue ===
										(condition.subtitle as string)
									}
									onChange={handleChange}
									value={condition.subtitle}
									name={props.title}
									sx={{ zIndex: 1050 }}
								/>
							</Stack>
						</Grid>
					))}
				</Grid>
			</Paper>
		</>
	);
}

export { ConditionContainer as default };
