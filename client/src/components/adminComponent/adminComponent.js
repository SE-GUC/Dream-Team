import React, { Component } from "react";
import "./adminComponent.css";
import AuthHelperMethods from "../AuthHelperMethods";

import Login from "../login/login";

class adminComponent extends Component {
  // Auth = new AuthHelperMethods();
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
        {/* <h2>Sumerge</h2> */}
        {/* <a className={'logIn'}>Hi, {this.Auth.getConfirm().name} </a>
        <a />= */}
        <div className="control" onClick={this.handleClick}>
          Menu
          <div className={this.state.isShow ? "content" : "invisible"}>
            <div id="mySidenav" className="sidenav">
              <button
                onClick={this.handleClick}
                type="button"
                className="closebtn"
              >
                &times;
              </button>
              <a href="/adminARC"> Accept/Reject Accounts </a>
              <a href="/employeeTable">View All Employees</a>
              <a href="/formsOfLawyer"> View Forms of Lawyer </a>
              <a href="/getUser">View User</a>
              <a href="/userTable">View All Users</a>

              <a href="/viewAllInvestors"> View All Investors</a>
              <a href="/viewAllLawyer"> View All Lawyers</a>
              <a href="/reviewers"> View All Reviewers</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default adminComponent;
