import "./App.css";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "./logo.png";
import bayarea from "./bayarea.jpg";
import cococounty from "./cococounty.jpeg";

const App = () => {
  return (
    <div>
      <Container fluid>
        <Navbar
          className="navBar"
          collapseOnSelect
          expand="lg"
          bg="transparent"
          variant=""
          style={{ fontSize: "1rem", color: "#fff", fontWeight: "bold" }}
        >
          <Navbar.Brand href="#home">Shafiq Shahrani</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#pricing">Houses</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#moreInfo">More Info</Nav.Link>
              <Nav.Link href="contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${cococounty})` }}
      ></div>
    </div>
  );
};

export default App;
