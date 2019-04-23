import React, { Component } from "react";
import "./lawyer.css";
import Login from "../login/login";

class lawyer extends Component {
  constructor(props) {
    super(props);
    this.state = { isShow: false };
  }

  handleClick = () => {
    this.setState({ isShow: !this.state.isShow });
  };
  signUp() {}
  render() {
    return (
      <div className="background-image">
        {/* <h2>Sumerge</h2>
        <a className={"logIn"} href="/login">
          Login{" "}
        </a>
        <a />=
        <a className={"signUp"} href="/signUp">
          {" "}
          Sign Up{" "}
        </a> */}
        <div className="control" onClick={this.handleClick}>
          MENU
          <div className={this.state.isShow ? "content" : "invisible"}>
            <div id="mySidenav" className="sidenav">
              <button
                onClick={this.handleClick}
                type="button"
                className="closebtn"
              >
                &times;
              </button>
              {/* <a href="/publishedCompanies">View published Companies </a> */}
              <a href="/viewAllForms">View all Forms</a>
              <a href="/LawyerFillForm">Fill Lawyer Form</a>
              <a href="/lawyerFinalizedCases">View Lawyer Finalized Cases</a>
              <a href="/formsOfLawyer">forms of lawyer</a>
              <a href="/Lawyershowmyforms">lawyer show pending forms</a>
              <a href="/assignLaw">I want to get assigned to a form</a>
              <a href="/filterCase">Filter Cases</a>
              <a href="/lawyerUpdate">Update a form</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default lawyer;
