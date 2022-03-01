import { useState } from "react";
import { Grid, Button, Modal, Box, Paper } from "@mui/material";
import { Navbar } from "../../common";
import "./Header.css";
import LogIn from "../../LogIn";

function Header() {
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
          <a href="/" className="header-logo">
            LOGO
          </a>
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
              <LogIn />
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
