import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./app";
import "./index.css";
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
<<<<<<< HEAD
=======
import ReviewerCase from "./components/reviewerCase/reviewerCase";
import UpdateUser from "./components/updateUser/updateUser";
import UserTable from "./components/usertable/userTable";
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
import Reviewer from "./pages/reviewer/reviewer";
import "./index.css";
import HomePage from "./pages/homepage";
import Case from "./pages/LRspecificCase";
import searchBar from "./components/searchBar";
import UpdateInvForm from "./components/updateInvForm";
import formsOfLawyer from "./components/formsOfLawyer";
import lawyerFinalizedCases from "./components/lawyerFinalizedCases/lawyerFinalizedCases";
import pdfUpload from "./components/pdfUpload/pdfUpload";
import externalPortal from "./components/externalPortal/externalPortal";
>>>>>>> 960819cf6f799174e905e9998e857c3c421a54f7

import UpdateUser from "./components/updateUser/updateUser";
// import UserTable from "./components/usertable/userTable";
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
import searchBar from "./components/searchBar";
import UpdateInvForm from "./components/updateInvForm";
import formsOfLawyer from "./components/formsOfLawyer";
import lawyerFinalizedCases from "./components/lawyerFinalizedCases/lawyerFinalizedCases";
// import pdfUpload from "./components/pdfUpload/pdfUpload";
import externalPortal from "./components/externalPortal/externalPortal";
import investorComponent from "./components/investorComponent/investorComponent";
import InvestorFillForm from "./components/InvestorFillForm/InvestorFillForm";
import adminComponent from "./components/adminComponent/adminComponent";
import InvestorUpdateForm from "./components/InvestorUpdateForm/InvestorUpdateForm";
import investorAmountDate from "./components/investorAmountDate/investorAmountDate";
import investorTrackRequest from "./components/investorTrackRequest/investorTrackRequest";
// import ReviewerViewhisForms from "./components/ReviewerViewhisForms";

const app = (
  <Router>
    <App />
  </Router>
);
ReactDOM.render(app, document.getElementById("root"));

// ReactDOM.render(
//   <div>
//     <div id="Nav">
//       <NavBar />
//     </div>
//     <Router>
//       <div>
// <Route exact path="/" component={HomePage} />
// <Route path="/filter" component={filtercase} />
// <Route path="/login" component={Login} />
// <Route path="/investor" component={Investor} />
// <Route path="/LawyerFillForm" component={LawyerFillForm} />
// <Route path="/signup" component={SignUp} />
// <Route path="/update" component={UpdateTest} />
// <Route path="/employeeTable" component={EmployeeTable} />
// <Route path="/formTable" component={FormTable} />
// <Route path="/userTable" component={UserTable} />
// <Route path="/searchBar" component={searchBar} />
// <Route path="/reviewershowmyforms" component={ReviewerViewhisForms} />
// <Route path="/Lawyershowmyforms" component={LawyerViewhisCases} />
// <Route path="/companyRules" component={ComRule} />
// <Route path="/feesCalculation" component={CalcRule} />
// <Route path="/publishedCompanies" component={publishedCompanies} />
// <Route path="/case" component={Case} />
// <Route path="/CheckoutForm" component={CheckoutForm} />
// <Route path="/viewAllLawyer" component={viewAllLawyer} />
// <Route path="/updateInvForm" component={UpdateInvForm} />
// <Route path="/adminARC" component={AdminARC} />
// <Route path="/assignLaw" component={assignLaw} />
// <Route path="/updateUser" component={UpdateUser} />
// <Route path="/getUser" component={GetUser} />
// <Route path="/assignRev" component={AssignRev} />
// <Route path="/viewAllInvestors" component={viewAllInvestors} />
// <Route path="/formsOfLawyer" component={formsOfLawyer} />
// <Route path="/lawyerFinalizedCases" component={lawyerFinalizedCases} />
// <Route path="/reviewers" component={Reviewers} />
// <Route path="/invUpdate" component={InvUpdate} />
// <Route path="/viewAllForms" component={ViewAllForms} />
// <Route path="/lawyerUpdateForm" component={LawyerUpdateForm} />
// <Route path="/lawyerUpdate" component={LawUpForm} />
// <Route path="/feesCalc" component={feesCalc} />
//       </div>
//     </Router>
//   </div>,
//   document.getElementById("root")
// );

serviceWorker.unregister();
