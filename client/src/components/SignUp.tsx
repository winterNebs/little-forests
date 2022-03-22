import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props: any) {
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			{...props}
		>
			{"Copyright © "}
			<Link color="inherit" href="https://mui.com/">
				Your Website
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

interface HookProps {
	modalState: boolean;
	setState: any;
}

const theme = createTheme();

const SignUp = (props: HookProps) => {
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [username, setUsername] = React.useState("");
	const [message, setMessage] = React.useState("");
	const [isSignedUp, setIsSignedUp] = React.useState(false);

	const handleSubmit = async function (
		event: React.FormEvent<HTMLFormElement>
	) {
		event.preventDefault();
		try {
			let res = await fetch(
				process.env.REACT_APP_API + "/api/users/register",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						name: username,
						email: email,
						password: password,
					}),
				}
			);

			if (res.status === 201) {
				setUsername("");
				setEmail("");
				setPassword("");
				setMessage("Sign up Successfully");
				setIsSignedUp(true);
				console.log("signed up");
			} else {
				console.log(await res.text());
				setMessage("Sign up failed, please try again.");
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<ThemeProvider theme={theme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign up
					</Typography>
					<Box
						component="form"
						noValidate
						onSubmit={handleSubmit}
						sx={{ mt: 3 }}
					>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<TextField
									name="username"
									required
									fullWidth
									id="username"
									label="Username"
									autoFocus
									value={username}
									onChange={(e) =>
										setUsername(e.target.value)
									}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id="email"
									label="Email Address"
									name="email"
									autoComplete="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									name="password"
									label="Password"
									type="password"
									id="password"
									autoComplete="new-password"
									value={password}
									onChange={(e) =>
										setPassword(e.target.value)
									}
								/>
							</Grid>
						</Grid>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Sign Up
						</Button>
						{isSignedUp? props.setState(false): <p>{message}</p>}
						<Grid container justifyContent="flex-end">
							<Grid item>
								<Link href="#" variant="body2">
									Already have an account? Log in
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
				<Copyright sx={{ mt: 5 }} />
			</Container>
		</ThemeProvider>
	);
}

export { SignUp as default };
