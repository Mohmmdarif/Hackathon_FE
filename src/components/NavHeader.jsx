import React from "react";
import "../custom_style/custom.css";
import LogoWorkFrom from "../LogoWorkfrom.png";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const NavHeader = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary sticky-top gotham-book"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src={LogoWorkFrom} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ms-5 fw-semibold">
            <NavDropdown
              title="LOCATION"
              id="collapsible-nav-dropdown"
              className="gotham-medium me-3"
            >
              {/* 
              
              Location Menu 1
              
              */}
              <NavDropdown.Item href="#action/3.1">
                <strong className="gotham-medium">Jakarta</strong>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1.1" className="gotham-book">
                The 101 space (Setiabudi)
              </NavDropdown.Item>
              {/* 
              
              Location Menu 2
              
              */}
              <NavDropdown.Item href="#action/3.2">
                <strong className="gotham-medium">Medan</strong>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2.1" className="gotham-book">
                Clapham (Medan Timur)
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2.2" className="gotham-book">
                Yafuni (Medan Baru)
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2.3" className="gotham-book">
                Kalingga (Medan Petisah)
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2.4" className="gotham-book">
                Spasi (Medan Maimun)
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>

            {/* Navbar Dropdown Use Case */}
            <NavDropdown
              title="USE CASE"
              id="collapsible-nav-dropdown"
              className="gotham-medium me-3"
            >
              <NavDropdown.Item href="#action/3.1" className="gotham-book">
                Event
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="gotham-book">
                Meeting
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className="gotham-book">
                Photoshoot
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4" className="gotham-book">
                Videoshoot
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>

            <Nav.Link href="#deets" className="gotham-medium">
              BLOG
            </Nav.Link>
          </Nav>
          <Nav className="fw-semibold">
            <Nav.Link eventKey={2} href="#memes" className="gotham-medium">
              CONTACT US
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavHeader;
