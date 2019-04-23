import React, { Component } from "react";
import "./investorComponent.css";
import AuthHelperMethods from "../AuthHelperMethods";

import Login from "../login/login";

class investorComponent extends Component {
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
              <a href="/updateUser"> Update Profile </a>
              <a href="/investor">View Running and Pending Companies </a>
              <a href="/InvestorFillForm"> Create a new Form </a>
              <a href="/investorUpdate">To Update Rejected Forms</a>
              <a href="/updateInvForm">To Update Forms</a>
              <a href="/pdfUpload"> To Generate a PDF</a>
              <a href="/CheckoutForm"> Payment</a>

              <a href="/investorAmountDate"> Amount & Due Dates</a>
              <a href="/investorTrackRequest"> Track Requests</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default investorComponent;
