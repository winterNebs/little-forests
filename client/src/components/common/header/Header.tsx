import { useState } from "react";
import { Grid, Button, Modal, Box } from "@mui/material";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Navbar } from "..";
import "./Header.css";
import LogIn from "../../LogIn";

const Header = () => {
  // Declare a new state variable for the modal
  const [open, setOpen] = useState(false);

  // Function to handle modal open
  const handleOpen = () => {
    setOpen(true);
  };

  // Function to handle modal close
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section className="header">
      <section className="header-top">
        <section className="header-top-logo">
          
          <Link to="/">
            LOGO
          </Link>
          
          
        </section>
        <section className="header-top-button">
          <Button variant="contained" onClick={handleOpen}>
            Log In
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            //closeAfterTransaction ?
            sx={{ alignItems: "center", justifyContent: "center" }}
          >
            <Box
              sx={{
                width: 400,
                backgroundColor: "white",
                borderRadius: "25px",
                marginLeft: "40vw",
              }}
            >
              <LogIn setState={setOpen} modalState={open} />
            </Box>
          </Modal>
        </section>
      </section>

      <section className="header-bottom">
        <section className="header-bottom-navbar">{<Navbar />}</section>
      </section>
    </section>
  );
}

export default Header;
