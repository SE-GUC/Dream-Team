import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import React, { Component } from "react";

class Layout extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="layout">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#companies">Companies</Nav.Link>
            <Nav.Link href="#rules">Companies Rules</Nav.Link>
            <Nav.Link href="#feesRules">Calculation Fees Rules</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
export default Layout;
