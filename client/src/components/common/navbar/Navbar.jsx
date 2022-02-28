import React from "react";
import "./Navbar.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

function Navbar() {
  return (
    <div className="navbar">
      <ButtonGroup variant='outlined' size='large'>
        <Router>
          <Button component={Link} to='/browseforests' style={{ color: "white" }}>Browse Forests</Button>
          <Button component={Link} to='/browseplants' style={{ color: "white" }}>Browse Plants</Button>
          <Button component={Link} to='/about' style={{ color: "white" }}>About Us</Button>
          <Button component={Link} to='/contact' style={{ color: "white" }}>Contact</Button>
        </Router>
      </ButtonGroup>
    </div>
  );
}

export default Navbar;
