import React from "react";
import "./Navbar.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

function Navbar() {
  return (
    <div className="navbar">
      <ButtonGroup variant='outlined' size='large'>
        <Button style={{ color: "white" }}>Browse Forests</Button>
        <Button style={{ color: "white" }}>Browse Plants</Button>
        <Button style={{ color: "white" }}>About Us</Button>
        <Button style={{ color: "white" }}>Contact</Button>
      </ButtonGroup>
    </div>
  );
}

export default Navbar;
