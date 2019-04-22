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
          <Nav.Link href="/invUpdate">
           Update{" "}
          </Nav.Link>
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
          {/* <div className="control" onClick={this.handleClick}> */}
          {/* <Nav.Item text="beno" onClick={this.handleClick} /> */}
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
