import "./App.css";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "./logo.png";
import bayarea from "./bayarea.jpg";
import cococounty from "./cococounty.jpeg";
import davisTeam from "./davisTeam.png";
import Home from "./Home";
import About from "./About";

const App = () => {
  return (
    <Router>
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
              <Nav.Link href="#moreInfo">More Info</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
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
        <Routes>
          {/* <Route exact path="/" element={< />} /> */}
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
       
        {/* </Container> */}
        <div
          className="background-image"
          style={{ backgroundImage: `url(${cococounty})` }}
        ></div>
      </div>
    </Router>
  );
};

export default App;
