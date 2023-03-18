import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./CustomNavbar.css";
import logo from './logo.png';
import davisTeam from './davisTeam.png';

// const CustomNavbar = () => {
//   return (
//     <Navbar
//       className="navBar"
//       collapseOnSelect
//       expand="lg"
//       style={{
//         backgroundColor: "rgba(0,0,0,0.5)",
//         fontSize: "1rem",
//         color: "#fff",
//         fontWeight: "bold",
//         height: "100px",
//       }}
//     >
const CustomNavbar = ({ background }) => {
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
      collapseOnSelect
      expand="lg"
      style={{ ...styles }}
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
        <Link to="/">
          <img
            src={logo}
            width="180"
            height="180"
            alt="Logo"
            style={{ position: "fixed", top: -25, left: 0 }}
            // onClick={handleClick}
          />
        </Link>
        <Nav className="navOptions">
          <Nav.Link href="#pricing">Houses</Nav.Link>
          <Nav.Link href="#moreInfo">More Info</Nav.Link>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
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
  );
};

export default CustomNavbar;