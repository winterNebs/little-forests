import React from "react";
import { Navbar } from "../../common";
import "./Header.css";
import Button from "@mui/material/Button";

function Header() {
  return (
    <section className="header">
      <section className="header-top">
        <section className="header-top-logo">
          <a href="/" className="header-logo">
            LOGO
          </a>
        </section>
        <section className="header-top-button">
          <Button variant="contained" style={{ color: "white" }}>Log In</Button>
        </section>
      </section>

      <section className="header-bottom">
        <section className="header-bottom-navbar">{<Navbar />}</section>
      </section>
    </section>
  );
}

export default Header;
