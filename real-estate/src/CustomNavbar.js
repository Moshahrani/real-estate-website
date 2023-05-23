import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import ".//css/CustomNavbar.css";
import logo from ".//media/logo.png";
import davisTeam from ".//media/davisTeam-2.png";

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      className="custom-navbar"
      expand="lg"
      expanded={expanded}
      onToggle={setExpanded}
      // bg="dark"
      variant="dark"
    >
      <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>
        <img src={davisTeam} className="custom-logo" alt="Brand Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/houses" onClick={() => setExpanded(false)}>
            Houses
          </Nav.Link>
          <Nav.Link as={Link} to="/moreInfo" onClick={() => setExpanded(false)}>
            More Info
          </Nav.Link>
          <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" onClick={() => setExpanded(false)}>
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;

// const CustomNavbar = () => {
//   const [toggle, setToggle] = useState(false);

//   const handleToggle = () => {
//     setToggle(!toggle);
//   };

//   // const styles = {
//   //   backgroundImage: `url(${background})`,
//   //   backgroundColor: "rgba(0,0,0,0.5)",
//   //   backgroundSize: "cover",
//   //   height: "100px",
//   //   fontSize: "1rem",
//   //   color: "#fff",
//   //   fontWeight: "bold",
//   // };
//   const styles = {
//     backgroundColor: "#333", // Change the background color here
//     backgroundSize: "cover",
//     height: "100px",
//     fontSize: "1rem",
//     color: "#fff",
//     fontWeight: "bold",
//   };

//   return (
//     <Navbar
//       className="navBar"
//       // collapseOnSelect
//       expand="lg"
//       style={{ ...styles }}
//     >
//       <Navbar.Brand style={{ paddingLeft: "200px" }}></Navbar.Brand>
//       <Navbar.Toggle
//         // aria-controls="responsive-navbar-nav"
//         style={{ borderColor: "#fff", position: "absolute", left: "10px" }}
//         onClick={handleToggle}
//       />
//       <Navbar.Collapse
//         id="responsive-navbar-nav"
//         className={toggle ? "show-menu" : "hide"}
//       >
//         {/* <Nav.Link href="/">
//           <img
//             src={logo}
//             width="180"
//             height="180"
//             alt="Logo"
//             style={{
//               position: "fixed",
//               top: -25,
//               left: 0,
//               display: toggle ? "none" : "block",
//             }}
//           />
//         </Nav.Link> */}
//         <Nav className="navOptions ml-auto">
//           <Nav.Link as={Link} to="/" onClick={() => setToggle(false)}>
//             Home
//           </Nav.Link>
//           <Nav.Link as={Link} to="/houses" onClick={() => setToggle(false)}>
//             Houses
//           </Nav.Link>
//           <Nav.Link as={Link} to="/moreInfo" onClick={() => setToggle(false)}>
//             More Info
//           </Nav.Link>
//           <Nav.Link as={Link} to="/about" onClick={() => setToggle(false)}>
//             About
//           </Nav.Link>
//           <Nav.Link as={Link} to="contact" onClick={() => setToggle(false)}>
//             Contact
//           </Nav.Link>
//         </Nav>
//         <a href="https://www.davisteamexp.com">
//           <img
//             src={davisTeam}
//             width="340"
//             height="240"
//             alt="Logo"
//             style={{
//               position: "fixed",
//               top: -65,
//               right: 0,
//               zIndex: 0,
//               display: toggle ? "none" : "block",
//             }}
//           />
//         </a>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// };

// export default CustomNavbar;
