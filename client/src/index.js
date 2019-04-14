import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import EmployeeTable from "./components/employeeTable";
import filtercase from "./components/filterCase/filterCase";
import FormTable from "./components/formTable";
import LawyerFillForm from "./components/LawyerFillForm";
import Login from "./components/login";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./components/signup";
import UpdateTest from "./components/updateTest";
import "bootstrap/dist/css/bootstrap.css";
import * as serviceWorker from "./serviceWorker";
import Investor from "./components/investor";
import ComRule from "./components/comRule/comRule";
import CalcRule from "./components/calcRule/calcRule";
import publishedCompanies from "./components/publishedCompanies/publishedCompanies";
import CheckoutForm from "./components/CheckoutForm/App";
import GetUser from "./components/getUser/getUser";
import AssignRev from "./components/assignRev/assignRev";
import viewAllLawyer from "./components/viewAllLawyer/viewAllLawyer";
import AdminARC from "./components/adminARC/adminARC";
import assignLaw from "./components/assignLaw/assignLaw";

import UpdateUser from "./components/updateUser/updateUser";
import UserTable from "./components/userTable/userTable";
import ViewAllForms from "./components/viewAllForms/viewAllForms";
import viewAllInvestors from "./components/viewAllInvestors/viewAllInvestors";
import Reviewers from "./components/viewAllReviewers/viewAllReviewers";
import InvUpdate from "./components/investorUpdate/investorUpdate";
import LawyerUpdateForm from "./components/lawyerUpdateForm/lawyerUpdateForm";
import LawUpForm from "./components/lawyerUpdate/lawyerUpdate";
import NavBar from "./components/layout/layout";
import LawyerViewhisCases from "./components/LawyerViewhisCases";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import ReviewerViewhisForms from "./components/ReviewerViewhisForms";
import feesCalc from "./components/feesCalc/feesCalc";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";

import "./index.css";
import HomePage from "./pages/homepage";
import Case from "./pages/LRspecificCase";

// import ReviewerViewhisForms from "./components/ReviewerViewhisForms";

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/filter" component={filtercase} />
      <Route path="/login" component={Login} />
      <Route path="/investor" component={Investor} />
      <Route path="/LawyerFillForm" component={LawyerFillForm} />
      <Route path="/signup" component={SignUp} />
      <Route path="/update" component={UpdateTest} />
      <Route path="/employeeTable" component={EmployeeTable} />
      <Route path="/formTable" component={FormTable} />
      <Route path="/userTable" component={UserTable} />
      <Route path="/searchBar" component={searchBar} />
      <Route path="/reviewershowmyforms" component={ReviewerViewhisForms} />
      <Route path="/Lawyershowmyforms" component={LawyerViewhisCases} />
      <Route path="/companyRules" component={ComRule} />
      <Route path="/feesCalculation" component={CalcRule} />
      <Route path="/publishedCompanies" component={publishedCompanies} />
      <Route path="/case" component={Case} />
      <Route path="/CheckoutForm" component={CheckoutForm} />
      <Route path="/viewAllLawyer" component={viewAllLawyer} />
      <Route path="/updateInvForm" component={UpdateInvForm} />
      <Route path="/adminARC" component={AdminARC} />
      <Route path="/assignLaw" component={assignLaw} />
      <Route path="/updateUser" component={UpdateUser} />
      <Route path="/getUser" component={GetUser} />
      <Route path="/assignRev" component={AssignRev} />
      <Route path="/viewAllInvestors" component={viewAllInvestors} />
      <Route path="/formsOfLawyer" component={formsOfLawyer} />
      <Route path="/lawyerFinalizedCases" component={lawyerFinalizedCases} />
      <Route path="/reviewers" component={Reviewers} />
      <Route path="/invUpdate" component={InvUpdate} />
      <Route path="/viewAllForms" component={ViewAllForms} />
      <Route path="/lawyerUpdateForm" component={LawyerUpdateForm} />
      <Route path="/lawyerUpdate" component={LawUpForm} />
      <Route path="/feesCalc" component={feesCalc} />
    </div>
  </Router>,
  document.getElementById("root")
);
ReactDOM.render(<NavBar />, document.getElementById("Nav"));
