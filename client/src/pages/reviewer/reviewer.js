import React, { Component } from "react";
import "./reviewer.css";

class reviewer extends Component {
  constructor(props) {
    super(props);
    this.state = { isShow: false };
  }

  handleClick = () => {
    this.setState({ isShow: !this.state.isShow });
  };

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
              <a href="/assignRev"> View Unreviewed Forms</a>
              <a href="/filter">Search For a Company</a>
              <a href="/formTable">View All Forms</a>
              <a href="/reviewershowmyforms">View My Undecided Forms</a>
              <a href="/reviewerCase"> View My Decided Forms</a>
              <a href="/viewAllForms">Accept/Reject My Forms </a>
              <a href="/updateUser">Update My Info </a>
              {/* <a href="/searchBar">Search</a> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default reviewer;
