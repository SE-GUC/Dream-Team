import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./app";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

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
//         <Route exact path="/" component={HomePage} />
//         <Route path="/filter" component={filtercase} />
//         <Route path="/login" component={Login} />
//         <Route path="/investor" component={Investor} />
//         <Route path="/LawyerFillForm" component={LawyerFillForm} />
//         <Route path="/signup" component={SignUp} />
//         <Route path="/update" component={UpdateTest} />
//         <Route path="/employeeTable" component={EmployeeTable} />
//         <Route path="/formTable" component={FormTable} />
//         <Route path="/userTable" component={UserTable} />
//         <Route path="/searchBar" component={searchBar} />
//         <Route path="/reviewershowmyforms" component={ReviewerViewhisForms} />
//         <Route path="/Lawyershowmyforms" component={LawyerViewhisCases} />
//         <Route path="/companyRules" component={ComRule} />
//         <Route path="/feesCalculation" component={CalcRule} />
//         <Route path="/publishedCompanies" component={publishedCompanies} />
//         <Route path="/case" component={Case} />
//         <Route path="/CheckoutForm" component={CheckoutForm} />
//         <Route path="/viewAllLawyer" component={viewAllLawyer} />
//         <Route path="/updateInvForm" component={UpdateInvForm} />
//         <Route path="/adminARC" component={AdminARC} />
//         <Route path="/assignLaw" component={assignLaw} />
//         <Route path="/updateUser" component={UpdateUser} />
//         <Route path="/getUser" component={GetUser} />
//         <Route path="/assignRev" component={AssignRev} />
//         <Route path="/viewAllInvestors" component={viewAllInvestors} />
//         <Route path="/formsOfLawyer" component={formsOfLawyer} />
//         <Route path="/lawyerFinalizedCases" component={lawyerFinalizedCases} />
//         <Route path="/reviewers" component={Reviewers} />
//         <Route path="/invUpdate" component={InvUpdate} />
//         <Route path="/viewAllForms" component={ViewAllForms} />
//         <Route path="/lawyerUpdateForm" component={LawyerUpdateForm} />
//         <Route path="/lawyerUpdate" component={LawUpForm} />
//         <Route path="/feesCalc" component={feesCalc} />
//       </div>
//     </Router>
//   </div>,
//   document.getElementById("root")
// );

serviceWorker.unregister();
