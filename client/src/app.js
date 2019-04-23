import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component, default as React } from "react";
import { Route } from "react-router-dom";
import AdminARC from "./components/adminARC/adminARC";
import adminComponent from "./components/adminComponent/adminComponent";
import assignLaw from "./components/assignLaw/assignLaw";
import AssignRev from "./components/assignRev/assignRev";
import AuthHelperMethods from "./components/AuthHelperMethods";
import CalcRule from "./components/calcRule/calcRule";
import CheckoutForm from "./components/CheckoutForm/App";
import ComRule from "./components/comRule/comRule";
import EmployeeTable from "./components/employeeTable";
import externalPortal from "./components/externalPortal/externalPortal";
import feesCalc from "./components/feesCalc/feesCalc";
import filtercase from "./components/filterCase/filterCase";
import formsOfLawyer from "./components/formsOfLawyer";
import FormTable from "./components/formTable/formTable";
import GetUser from "./components/getUser/getUser";
import internalPortal from "./components/internalPortal/internalPortal";
import Investor from "./components/investor";
import investorPortal from "./components/investorComponent/investorComponent";
import fillform from "./components/InvestorFillForm/InvestorFillForm";
import investorTrackRequest from "./components/investorTrackRequest/investorTrackRequest";
import InvUpdate from "./components/investorUpdate/investorUpdate";
import Lawy from "./components/lawyer/lawyer";
import LawyerFillForm from "./components/LawyerFillForm";
import lawyerFinalizedCases from "./components/lawyerFinalizedCases/lawyerFinalizedCases";
import LawUpForm from "./components/lawyerUpdate/lawyerUpdate";
import LawyerUpdateForm from "./components/lawyerUpdateForm/lawyerUpdateForm";
import LawyerViewhisCases from "./components/LawyerViewhisCases";
import Navigation from "./components/layout/layout";
import Login from "./components/login/login";
import publishedCompanies from "./components/publishedCompanies/publishedCompanies";
import ReviewerViewhisForms from "./components/ReviewerViewhisForms";
import searchBar from "./components/searchBar";
import SignUp from "./components/signup";
import UpdateInvForm from "./components/updateInvForm";
import UpdateTest from "./components/updateTest";
import UpdateUser from "./components/updateUser/updateUser";
import UserTable from "./components/userTable/userTable";
import ViewAllForms from "./components/viewAllForms/viewAllForms";
import viewAllInvestors from "./components/viewAllInvestors/viewAllInvestors";
import viewAllLawyer from "./components/viewAllLawyer/viewAllLawyer";
import Reviewers from "./components/viewAllReviewers/viewAllReviewers";
import "./index.css";
import homepage from "./pages/homepage/homepage";
import Case from "./pages/LRspecificCase";
class App extends Component {
  Auth = new AuthHelperMethods();

  statue = {
    isLoggedIn: false
  };

  loggedStatus = newState => {
    this.statue = {
      isLoggedIn: newState
    };
  };

  render() {
    return (
      <div>
        <Navigation isLoggedin={this.statue.isLoggedIn} type={"investor"} />
        <div>
          <Route exact path="/" component={homepage} />
          <Route path="/investor" component={Investor} />
          <Route path="/admin" component={adminComponent} />
          <Route path="/lawyer" component={Lawy} />
          <Route path="/investorComponent" component={investorPortal} />
          <Route path="/filter" component={filtercase} />
          <Route path="/LawyerFillForm" component={LawyerFillForm} />
          <Route path="/signup" component={SignUp} />
          <Route path="/update" component={UpdateTest} />
          <Route path="/employeeTable" component={EmployeeTable} />
          <Route path="/formTable" component={FormTable} />
          <Route path="/filter" component={filtercase} />
          <Route path="/login" component={Login} />
          <Route path="/LawyerFillForm" component={LawyerFillForm} />
          <Route path="/signup" component={SignUp} />
          <Route path="/update" component={UpdateTest} />
          <Route path="/employeeTable" component={EmployeeTable} />
          <Route path="/formTable" component={FormTable} />
          <Route path="/userTable" component={UserTable} />
          <Route path="/searchBar" component={searchBar} />{" "}
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
          <Route path="/formsOfLawyer" component={formsOfLawyer} />{" "}
          <Route
            path="/lawyerFinalizedCases"
            component={lawyerFinalizedCases}
          />
          <Route path="/reviewers" component={Reviewers} />
          <Route path="/invUpdate" component={InvUpdate} />
          <Route path="/viewAllForms" component={ViewAllForms} />
          <Route path="/lawyerUpdateForm" component={LawyerUpdateForm} />
          <Route path="/lawyerUpdate" component={LawUpForm} />
          <Route path="/feesCalc" component={feesCalc} />
          <Route path="/InvestorFillForm" component={fillform} />
          <Route path="/searchBar" component={searchBar} />
          <Route path="/adminPortal" component={adminPortal} />
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
          <Route path="/internalPortal" component={internalPortal} />
          <Route path="/formsOfLawyer" component={formsOfLawyer} />
          <Route
            path="/lawyerFinalizedCases"
            component={lawyerFinalizedCases}
          />
          <Route path="/reviewers" component={Reviewers} />
          <Route path="/investorUpdate" component={InvUpdate} />
          <Route path="/viewAllForms" component={ViewAllForms} />
          <Route path="/lawyerUpdateForm" component={LawyerUpdateForm} />
          <Route path="/lawyerUpdate" component={LawUpForm} />
          <Route path="/feesCalc" component={feesCalc} />
          <Route path="/externalPortal" component={externalPortal} />
          <Route
            path="/investorTrackRequest"
            component={investorTrackRequest}
          />
          <Route
            path="/login"
            render={props => (
              <Login {...props} onChange={this.loggedStatus.bind(this)} />
            )}
          />
        </div>
      </div>
    );
  }
}
export default App;
