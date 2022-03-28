import { Header, Footer } from "../common";
import { Box, Grid, Typography } from "@mui/material";

export default function PageNotFound() {
	return (
		<div>
			<Header />
			<Grid
				container
				style={{ marginTop: "15vh", marginBottom: "15vh" }}
				justifyContent="center"
				alignItems="stretch"
				direction="column"
			>
				<Grid item>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignContent: "center",
							backgroundColor: "primary.main",
							width: "100%",
							height: 200,
						}}
					>
						<Typography variant="h3" color="white">
							404 ERROR
						</Typography>
						<Typography variant="h4" color="white">
							Page Not Found.
						</Typography>
					</Box>
				</Grid>
			</Grid>
			<Footer />
		</div>
	);
}
