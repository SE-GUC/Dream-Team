import React, { Component } from "react";
import "../homepage/homepage.css";
import Login from "../../components/login";

// import SignUp from "../../components/signup";
// import Table from "../../components/userTable";
// import Tableform from "../../components/formTable";
// import AuthHelperMethods from "./components/AuthHelperMethods";
// import withAuth from "./components/withAuth";
import Investorr from "../../components/investor";
class HomePage extends Component {
  state = {};

  // Auth = new AuthHelperMethods();

  _handleLogout = () => {
    this.Auth.logout();

    this.props.history.replace("/api/login");
  };

  render() {
    return (
      <div className="HomePage">
        IN HomePage.JS
        <Login />
        <h1>Investorr Only(add your ID to check cases)</h1>
        <Investorr />
        {/* <Table ApiURL="api/user/getUsers" /> */}
        {/* <Tableform /> */}
      </div>
    );
  }
}

export default HomePage;
