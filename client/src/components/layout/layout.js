import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import AuthHelperMethods from "../AuthHelperMethods";
import "./layout.css";
import logo from "./menu_white.png";

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
    if (this.props.type == "investor") {
      menu = (
        <div>
          <Nav.Link href="/invUpdate">Update </Nav.Link>
          <Nav.Link href="/publishedCompanies">
            View Publishes Companies
          </Nav.Link>
          <Nav.Link href="/signup">Sign Up</Nav.Link>
          <Nav.Link href="/login">Sign In</Nav.Link>
        </div>
      );
    }
    if (this.props.type == "lawyer") {
      menu = (
        <div>
          <Nav.Link href="/feesCalculation">
            View Laws and Calculation Rules{" "}
          </Nav.Link>
          <Nav.Link href="/publishedCompanies">
            View Publishes Companies
          </Nav.Link>
          <Nav.Link href="/signup">Sign Up</Nav.Link>
          <Nav.Link href="/login">Sign In</Nav.Link>
        </div>
      );
    }
    if (this.props.type == "reviewer") {
      menu = (
        <div>
          <Nav.Link href="/feesCalculation">
            View Laws and Calculation Rules{" "}
          </Nav.Link>
          <Nav.Link href="/publishedCompanies">
            View Publishes Companies
          </Nav.Link>
          <Nav.Link href="/signup">Sign Up</Nav.Link>
          <Nav.Link href="/login">Sign In</Nav.Link>
        </div>
      );
    }
    if (this.props.type == "admin") {
      menu = (
        <div>
          <Nav.Link href="/feesCalculation">
            View Laws and Calculation Rules{" "}
          </Nav.Link>
          <Nav.Link href="/publishedCompanies">
            View Publishes Companies
          </Nav.Link>
          <Nav.Link href="/signup">Sign Up</Nav.Link>
          <Nav.Link href="/login">Sign In</Nav.Link>
          <Nav.Link href="/adminPortal">Admin Portal</Nav.Link>
        </div>
      );
    }

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
    const closebutton = {
      color: "white"
    };

    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <img src={logo} className="btno " onClick={this.handleClick} />
          <div className={this.state.isShow ? "content" : "invisible"}>
            <div id="mySidenav" className="sidenav">
              <button
                onClick={this.handleClick}
                type="button"
                className="closebtn"
                style={closebutton}
              >
                &times;
              </button>
              {menu}
            </div>
          </div>
          {/* </div> */}
          <Navbar.Brand href="/">Sumerge</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/externalPortal">External Portal</Nav.Link>
              <Nav.Link href="/internalPortal">Internal Portal</Nav.Link>
              <Nav.Link href="/lawyer">Lawyer</Nav.Link>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/publishedCompanies">Companies</Nav.Link>
              <Nav.Link href="/companyRules">Companies Rules</Nav.Link>
              <Nav.Link href="/adminPortal">Admin portal</Nav.Link>
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
