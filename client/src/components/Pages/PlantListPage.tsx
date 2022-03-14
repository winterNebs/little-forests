import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";

function PlantListPage() {
	const [plants, setPlants]: [any, Function] = useState({});

	useEffect(() => {
		fetch(process.env.REACT_APP_API + "/api/plants")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setPlants(data);
			});
	}, []);

	return <h1>{JSON.stringify(plants)}</h1>;
}

export default PlantListPage;

