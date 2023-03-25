import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CustomNavbar.css";
import logo from "./logo.png";
import davisTeam from "./davisTeam.png";

const CustomNavbar = ({ background }) => {
  const [toggle, setToggle] = useState(false);
  
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const styles = {
    backgroundImage: `url(${background})`,
    backgroundColor: "rgba(0,0,0,0.5)",
    backgroundSize: "cover",
    height: "100px",
    fontSize: "1rem",
    color: "#fff",
    fontWeight: "bold",
  };

  return (
    <Navbar
      className="navBar"
      // collapseOnSelect
      expand="lg"
      style={{ ...styles }}
    >
      <Navbar.Brand style={{ paddingLeft: "200px" }}></Navbar.Brand>
      <Navbar.Toggle
        // aria-controls="responsive-navbar-nav"
        style={{ borderColor: "#fff", position: "absolute", left: "10px" }}
        onClick={handleToggle}
      />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className={toggle ? "show-menu" : "hide"}
      >
        <Nav.Link href="/">
          <img
            src={logo}
            width="180"
            height="180"
            alt="Logo"
            style={{
              position: "fixed",
              top: -25,
              left: 0,
              display: toggle ? "none" : "block",
            }}
          />
        </Nav.Link>
        <Nav className="navOptions ml-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/houses">
            Houses
          </Nav.Link>
          <Nav.Link as={Link} to="/moreInfo">
            More Info
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="contact">
            Contact
          </Nav.Link>
        </Nav>
        <a href="https://www.davisteamexp.com">
          <img
            src={davisTeam}
            width="340"
            height="240"
            alt="Logo"
            style={{
              position: "fixed",
              top: -65,
              right: 0,
              zIndex: 0,
              display: toggle ? "none" : "block",
            }}
          />
        </a>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
