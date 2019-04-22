import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import React, { Component } from "react";
import AuthHelperMethods from "../AuthHelperMethods";

class Layout extends Component {
  Auth = new AuthHelperMethods();
  state = {
    isLoggedIn: false,
    rightNavBar: ""
  };

  componentDidMount() {
    this.setState({ isLoggedIn: this.Auth.loggedIn() });
    console.log(this.state.isLoggedIn);
  }

  render() {
    var rightNavBar;

    if (this.state.isLoggedIn == false) {
      rightNavBar = (
        <Nav>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/signup">Sign Up</Nav.Link>
        </Nav>
      );
    } else {
      console.log(this.state.isLoggedIn);
      rightNavBar = (
        <Nav>
          <Nav.Link href="/login">{this.Auth.getConfirm().name}</Nav.Link>
          <Nav.Link href="/" onSelect={this.Auth.logout()}>
            Log Out
          </Nav.Link>
        </Nav>
      );
    }
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Sumerge</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/externalPortal">External Portal</Nav.Link>
              <Nav.Link href="/internalPortal">Internal Portal</Nav.Link>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/publishedCompanies">Companies</Nav.Link>
              <Nav.Link href="/companyRules">Companies Rules</Nav.Link>
              <Nav.Link href="/feesCalculation">
                Calculation Fees Rules
              </Nav.Link>
            </Nav>
            {rightNavBar}
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Layout;
