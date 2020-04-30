import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Navbar.css'

const NavbarComp = () => {
  return (
    <Navbar collapseOnSelect fixedTop className="navbar">
      <Navbar.Header>
        <Navbar.Brand>
         <Link to="/" exact className="color">Mukarram</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem  componentClass={Link} href="/About" to="/About" className="color">
            About
          </NavItem>
          <NavItem componentClass={Link} href="/Contact" to="/Contact" className="color">
          Contact
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComp;
