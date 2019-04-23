import React, { Component } from "react";
import "./adminPortal.css";

class adminPortal extends Component {
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
              <a href="/feesCalculation">View Laws and Calculation Rules </a>
              <a href="/publishedCompanies">View Publishes Companies</a>

              <a href="/adminARC">adminARC</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default adminPortal;
