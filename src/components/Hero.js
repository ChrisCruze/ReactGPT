import React from "react";
import { Box, Typography, Button } from "@mui/material";

function Hero({ title, buttonText }) {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				height: "100vh",
				backgroundImage: "url(https://source.unsplash.com/random)",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<Typography
				variant="h2"
				component="h1"
				gutterBottom
				sx={{
					color: "white",
					textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
				}}
			>
				{title}
			</Typography>
			<Button variant="contained" color="primary" size="large">
				{buttonText}
			</Button>
		</Box>
	);
}

Hero.defaultProps = {
	title: "Welcome to Our Site!",
	buttonText: "Learn More",
};

export default Hero;
