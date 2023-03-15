import "./App.css";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "./logo.png";
import bayarea from "./bayarea.jpg";
import cococounty from "./cococounty.jpeg";
import davisTeam from "./davisTeam.png";

const App = () => {
  return (
    <div>
      {/* <Container fluid> */}
      <Navbar
        className="navBar"
        collapseOnSelect
        expand="lg"
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          fontSize: "1rem",
          color: "#fff",
          fontWeight: "bold",
          height: "100px",
        }}
      >
        <Navbar.Brand
          style={{ paddingLeft: "200px" }}
          href="#home"
        ></Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          style={{ borderColor: "#fff" }}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <img
              src={logo}
              width="180"
              height="180"
              alt="Logo"
              style={{ position: "fixed", top: -25, left: 0 }}
            />
          <Nav className="">
            <Nav.Link href="#pricing">Houses</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#moreInfo">More Info</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
          </Nav>
          <img
            src={davisTeam}
            width="340"
            height="240"
            alt="Logo"
            style={{ position: "fixed", top: -65, right: 0, zIndex: 0 }}
          />
        </Navbar.Collapse>
      </Navbar>
      <div className="opening-statement">
        <h1 className="statement">Experience is everything!</h1>
        {/* <p>This is a paragraph of introductory text.</p> */}
        <h2 className="mission-statement">Our clients can trust that they receive a customized service that is rooted in our team's extensive industry knowledge and local expertise.</h2>
      </div>
      {/* </Container> */}
      <div
        className="background-image"
        style={{ backgroundImage: `url(${cococounty})` }}
      ></div>
    </div>
  );
};

export default App;
