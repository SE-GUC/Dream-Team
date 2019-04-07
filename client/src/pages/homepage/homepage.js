import React, { Component } from "react";
import "../homepage/homepage.css";

class HomePage extends Component {
  state = {};
  update() {
    this.props.history.push("/update");
  }
  viewInvestor() {
    this.props.history.push("/investor");
  }
  login() {
    this.props.history.push("/login");
  }
  signUp() {
    this.props.history.push("/signup");
  }
  userTable() {
    this.props.history.push("/userTable");
  }
  employeeTable() {
    this.props.history.push("/employeeTable");
  }
  formTable() {
    this.props.history.push("/formTable");
  }

  _handleLogout = () => {
    this.Auth.logout();
    this.props.history.replace("/login");
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome Home</h2>
        </div>
        <div>
          To Login Press here
          <button
            className="btn btn-primary width-150"
            onClick={e => {
              this.login();
            }}
          >
            Click to login
          </button>
        </div>

        <div>
          To view Pending and Approved companies
          <button
            className="btn btn-primary width-150"
            onClick={e => {
              this.viewInvestor();
            }}
          >
            Click to view Pending and Approved companies
          </button>
        </div>
      </div>
    );
  }
}

export default HomePage;
