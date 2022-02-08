import React from "react";
import "./Navbar.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

function Navbar() {
  return (
    <div className="navbar">
      <ButtonGroup>
        <Button variant="text">Browse Forests</Button>
        <Button variant="text">Browse Plants</Button>
        <Button variant="text">About Us</Button>
        <Button variant="text">Contact</Button>
      </ButtonGroup>
    </div>
  );
}

export default Navbar;
