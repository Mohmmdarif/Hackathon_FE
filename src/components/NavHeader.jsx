import React from "react";
import LogoWorkFrom from "../LogoWorkfrom.png";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const NavHeader = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary sticky-top"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src={LogoWorkFrom} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ms-5 fw-semibold">
            <NavDropdown title="LOCATION" id="collapsible-nav-dropdown">
              {/* 
              
              Location Menu 1
              
              */}
              <NavDropdown.Item href="#action/3.1">
                <strong>Jakarta</strong>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1.1">
                The 101 space (Setiabudi)
              </NavDropdown.Item>
              {/* 
              
              Location Menu 2
              
              */}
              <NavDropdown.Item href="#action/3.2">
                <strong>Medan</strong>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2.1">
                Clapham (Medan Timur)
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2.2">
                Yafuni (Medan Baru)
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2.3">
                Kalingga (Medan Petisah)
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2.4">
                Spasi (Medan Maimun)
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>

            {/* Navbar Dropdown Use Case */}
            <NavDropdown title="USE CASE" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Event</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Meeting</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Photoshoot</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Videoshoot</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>

            <Nav.Link href="#deets">BLOG</Nav.Link>
          </Nav>
          <Nav className="fw-semibold">
            <Nav.Link eventKey={2} href="#memes">
              CONTACT US
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavHeader;
