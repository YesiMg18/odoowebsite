import React from 'react';
import "../scss/Navbar.scss";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

//Images
import logoImage from "../assets/odoo-white.svg";
import buyIcon from "../assets/buy-icon.svg";


function NavbarLanding() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar" variant="dark"  >
      <Container >
        <Navbar.Brand href="#home"><img src={logoImage} width="120" height="24" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#app">App</Nav.Link>
            <Nav.Link href="#docs">Docs</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#signin">Sign In</Nav.Link>
            <Button type="submit" variant="light" className="navbarButton"><img src={buyIcon} width="18" height="18" alt=""/>Buy now</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarLanding;