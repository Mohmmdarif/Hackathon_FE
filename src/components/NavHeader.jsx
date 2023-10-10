import React from "react";
import LogoWorkFrom from "../LogoWorkfrom.png";
import { Navbar, Container, Nav } from "react-bootstrap";

const NavHeader = () => {
  return (
    <div>
      <Navbar className="nav">
        <Container>
          <Navbar.Brand href="/">
            <img src={LogoWorkFrom} alt="logo_workfrom" />
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavHeader;
