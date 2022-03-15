import * as React from "react";
import { Box, Grid, Paper, Radio, Stack } from "@mui/material";
import { ContainerValues } from "./Pages/BuilderPage";
import placeholderImage from '../placeholder.jpg';

const ConditionContainer = (props: ContainerValues) => {

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
					<Grid item xs={12}>
						<h4>{props.description}</h4>
					</Grid>

					{props.siteConditions.map((condition) => (
						<Grid key={condition.subtitle} item xs={3} >
							<Stack spacing={-0.5}>
								{typeof condition.imageURL !== "undefined" ? (
									<>
										<img className="condition-thumbnail" src={condition.imageURL} />
										<h4>{condition.subtitle}</h4>
									</>
								) : (
									<>
										<img className="condition-thumbnail" src={placeholderImage} />
										<h4>{condition.subtitle}</h4>
									</>
									
								)}
								<Radio
									checked={
										props.groupSelectedValue ===
										(condition.subtitle as string)
									}
									onChange={props.radioHandler}
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
};

export { ConditionContainer as default };
