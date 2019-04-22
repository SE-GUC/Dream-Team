import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import AuthHelperMethods from "../AuthHelperMethods";

class Layout extends Component {
  Auth = new AuthHelperMethods();
  state = {
    isShow: false
  };
  componentDidMount() {
    this.setState({ isLoggedIn: this.Auth.loggedIn() });
  }

  handleClick = () => {
    this.setState({ isShow: !this.state.isShow });
  };

  render() {
    var rightNavBar;
    var menu;

    if (this.props.isLoggedin == true) {
      console.log("value is true");
      rightNavBar = (
        <Nav>
          <Nav.Link href="/login">{this.Auth.getConfirm().name}</Nav.Link>
          <Nav.Link href="/" onSelect={this.Auth.logout()}>
            Log Out
          </Nav.Link>
        </Nav>
      );
    } else {
      console.log("value is false");
      rightNavBar = (
        <Nav>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/signup">Sign Up</Nav.Link>
        </Nav>
      );
    }
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Sumerge</Navbar.Brand>
          <Nav className="layout">
            <Nav.Link href="#home" to="/">
              Home
            </Nav.Link>
            <Nav.Link href="#companies">Companies</Nav.Link>
            <Nav.Link href="/companyRules" to="/companyRules">
              Companies Rules
            </Nav.Link>
            <Nav.Link href="/feesCalculation" to="/feesCalculation">
              Calculation Fees Rules
            </Nav.Link>
            {rightNavBar}
          </Nav>
        </Navbar>
      </div>
    );
  }
}
export default Layout;
