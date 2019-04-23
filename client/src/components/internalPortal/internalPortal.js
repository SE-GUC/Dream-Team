import React, { Component } from "react";
import "./internalPortal.css";

class internalPortal extends Component {
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
              <a href="/case">Lawyer Working on a Case </a>
              <a href="/formTable">View All Cases</a>

              <a href="/updateUser">Update Profile</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default internalPortal;
