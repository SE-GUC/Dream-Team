import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import React, { Component } from "react";

class Layout extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Sumerge</Navbar.Brand>
          <Nav className="layout">
            <Nav.Link href="/" to="/">
              Home
            </Nav.Link>
            <Nav.Link href="/companies">Companies</Nav.Link>
            <Nav.Link href="/companyRules" to="/companyRules">
              Companies Rules
            </Nav.Link>
            <Nav.Link href="/feesCalculation" to="/feesCalculation">
              Calculation Fees Rules
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
export default Layout;
