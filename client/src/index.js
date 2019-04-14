import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AssignRev from "./components/assignRev/assignRev";
import CalcRule from "./components/calcRule/calcRule";
import ComRule from "./components/comRule/comRule";
import EmployeeTable from "./components/employeeTable";
import feesCalc from "./components/feesCalc/feesCalc";
import filtercase from "./components/filterCase/filterCase";
import formsOfLawyer from "./components/formsOfLawyer/formsOfLawyer";
import FormTable from "./components/formTable";
import GetUser from "./components/getUser/getUser";
import Investor from "./components/investor";
import InvUpdate from "./components/investorUpdate/investorUpdate";
import LawyerFillForm from "./components/LawyerFillForm";
import lawyerFinalizedCases from "./components/lawyerFinalizedCases/lawyerFinalizedCases";
import LawUpForm from "./components/lawyerUpdate/lawyerUpdate";
import LawyerUpdateForm from "./components/lawyerUpdateForm/lawyerUpdateForm";
import LawyerViewhisCases from "./components/LawyerViewhisCases";
import NavBar from "./components/layout/layout";
import Login from "./components/login";
import publishedCompanies from "./components/publishedCompanies/publishedCompanies";
import ReviewerViewhisForms from "./components/ReviewerViewhisForms";
import searchBar from "./components/searchBar";
import SignUp from "./components/signup";
import UpdateTest from "./components/updateTest";
import UpdateUser from "./components/updateUser/updateUser";
import UserTable from "./components/userTable/userTable";
import ViewAllForms from "./components/viewAllForms/viewAllForms";
import viewAllInvestors from "./components/viewAllInvestors/viewAllInvestors";
import Reviewers from "./components/viewAllReviewers/viewAllReviewers";
import "./index.css";
import HomePage from "./pages/homepage";
import Case from "./pages/LRspecificCase";

// import ReviewerViewhisForms from "./components/ReviewerViewhisForms";

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
