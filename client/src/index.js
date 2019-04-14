import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import CalcRule from "./components/calcRule/calcRule";
// import ComRule from "./components/comRule/comRule";
import EmployeeTable from "./components/employeeTable";
import filtercase from "./components/filterCase/filterCase";
import FormTable from "./components/formTable";
// import Investor from "./components/investor";
import LawyerFillForm from "./components/LawyerFillForm";
// import LawyerViewhisCases from "./components/LawyerViewhisCases";
// import NavBar from "./components/layout/layout";
import Login from "./components/login";
// import ReviewerViewhisForms from "./components/ReviewerViewhisForms";
// import Login from './components/login';
// import UpdateTest from './components/updateTest';
// import EmployeeTable from './components/employeeTable';
// import SignUp from './components/signup';
// import FormTable from './components/formTable';
import searchBar from "./components/searchBar";
import SignUp from "./components/signup";
import UpdateTest from "./components/updateTest";
import UserTable from "./components/userTable/userTable";
import "./index.css";
import HomePage from "./pages/homepage";
import Case from "./pages/LRspecificCase";
import * as serviceWorker from "./serviceWorker";
import Investor from "./components/investor";
import ComRule from "./components/comRule/comRule";
import CalcRule from "./components/calcRule/calcRule";
import publishedCompanies from "./components/publishedCompanies/publishedCompanies";
import CheckoutForm from "./components/CheckoutForm/App";
import viewAllInvestors from "./components/viewAllInvestors/viewAllInvestors";
import formsOfLawyer from "./components/formsOfLawyer/formsOfLawyer";
import lawyerFinalizedCases from "./components/lawyerFinalizedCases/lawyerFinalizedCases";
import Reviewers from "./components/viewAllReviewers/viewAllReviewers";
import InvUpdate from "./components/investorUpdate/investorUpdate";
import ViewAllForms from "./components/viewAllForms/viewAllForms";
import LawyerUpdateForm from "./components/lawyerUpdateForm/lawyerUpdateForm";
import LawUpForm from "./components/lawyerUpdate/lawyerUpdate";
import NavBar from "./components/layout/layout";
// import UserTable from './components/userTable/userTable';
// import UpdateTest from "./components/updateTest";
import LawyerViewhisCases from "./components/LawyerViewhisCases";
// import UserTable from "./components/userTable/userTable";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import HomePage from "./pages/homepage";
// import Case from './pages/LRspecificCase';
import "bootstrap/dist/css/bootstrap.css";
import ReviewerViewhisForms from "./components/ReviewerViewhisForms";

ReactDOM.render(
  <Router>
    <div>
      <Route exactpath="/" component={HomePage} />
      <Route path="/filter" component={filtercase} />
      <Route exact path="/" component={HomePage} />
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
      <Route
        path="/companyRules"
        // @ts-ignore
        component={ComRule}
      />
      <Route path="/feesCalculation" component={CalcRule} />
      <Route path="/publishedCompanies" component={publishedCompanies} />
      <Route path="/case" component={Case} />
      <Route path="/case" component={Case} />
      <Route path="/CheckoutForm" component={CheckoutForm} />
      <Route path="/viewAllInvestors" component={viewAllInvestors} />
      <Route path="/formsOfLawyer" component={formsOfLawyer} />
      <Route path="/lawyerFinalizedCases" component={lawyerFinalizedCases} />
      <Route path="/reviewers" component={Reviewers} />
      <Route path="/invUpdate" component={InvUpdate} />
      <Route path="/viewAllForms" component={ViewAllForms} />
      <Route path="/lawyerUpdateForm" component={LawyerUpdateForm} />
      <Route path="/lawyerUpdate" component={LawUpForm} />
    </div>
  </Router>,
  document.getElementById("root")
);
ReactDOM.render(<NavBar />, document.getElementById("Nav"));
