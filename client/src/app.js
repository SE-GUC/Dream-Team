import React, { Component } from "react";
import { Route } from "react-router-dom";
import AdminARC from "./components/adminARC/adminARC";
import assignLaw from "./components/assignLaw/assignLaw";
import AssignRev from "./components/assignRev/assignRev";
import AuthHelperMethods from "./components/AuthHelperMethods";
import CalcRule from "./components/calcRule/calcRule";
import CheckoutForm from "./components/CheckoutForm/App";
import ComRule from "./components/comRule/comRule";
import EmployeeTable from "./components/employeeTable";
import externalPortal from "./components/externalPortal/externalPortal";
import feesCalc from "./components/feesCalc/feesCalc";
import Navigation from "./components/layout/layout";
import Login from "./components/login/login";
import homepage from "./pages/homepage/homepage";
class App extends Component {
  Auth = new AuthHelperMethods();

  state = {
    isLoggedIn: false
  };

  loggedStatus = newState => {
    this.setState({ isLoggedIn: newState });
  };

  render() {
    console.log("this.logged.isLoggedIn " + this.state.isLoggedIn);
    return (
      <div>
        <Navigation isLoggedin={this.state.isLoggedIn} type={"investor"} />
        <div>
          <Route exact path="/" component={homepage} />
          <Route path="/employeeTable" component={EmployeeTable} />
          <Route path="/companyRules" component={ComRule} />
          <Route path="/feesCalculation" component={CalcRule} />
          <Route path="/CheckoutForm" component={CheckoutForm} />
          <Route path="/adminARC" component={AdminARC} />
          <Route path="/assignLaw" component={assignLaw} />
          <Route path="/assignRev" component={AssignRev} />
          <Route path="/feesCalc" component={feesCalc} />
          <Route path="/externalPortal" component={externalPortal} />
          <Route
            path="/investor"
            render={() => <Login onChange={this.loggedStatus.bind(this)} />}
          />
        </div>
      </div>
    );
  }
}
export default App;
