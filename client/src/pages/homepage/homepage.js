import React, { Component } from "react";
import React, { Component } from "react";
import "../homepage/homepage.css";
import AuthHelperMethods from "../../components/AuthHelperMethods";
import AuthHelperMethods from "../../components/AuthHelperMethods";
import "../homepage/homepage.css";
import X from "../../components/ReviewerViewhisForms/ReviewerViewhisForms";
import Login from "../../components/login";
import Tableform from "../../components/formTable";
import LawyerCase from "../../components/lawyerCase";
import ReviewerCase from "../../components/reviewerCase";
import Lawyerview from "../../components/LawyerViewhisCases";
import formTable from "../../components/formTable";
import SignUp from "../../components/signup";
import Table from "../../components/usertable/userTable";
import Layout from "../../components/layout/layout";
import viewAllInvestors from "../../components/viewAllInvestors/viewAllInvestors";
import formsOfLawyer from "../../components/formsOfLawyer/formsOfLawyer";
import lawyerFinalizedCases from "../../components/lawyerFinalizedCases/lawyerFinalizedCases";
// import Tableform from '../../components/formTable';
import searchBar from "../../components/searchBar";
// import AuthHelperMethods from '../../components/AuthHelperMethods';
import withAuth from "../../components/withAuth";
import publishedCompanies from "../../components/publishedCompanies";

class HomePage extends Component {
  Auth = new AuthHelperMethods();
  state = {};
  publishedCompanies() {
    this.props.history.push("/publishedCompanies");
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {};
  //   // this.connecToServer = this.connecToServer.bind(this);
  // }
  viewAllForms() {
    this.props.history.push("/viewAllForms");
  }
  filter() {
    this.props.history.push("/filter");
  }
  LawyerFillForm() {
    this.props.history.push("/LawyerFillForm");
  }

  lawyerFinalizedCases() {
    this.props.history.push("/lawyerFinalizedCases");
  }
  viewAllInvestors() {
    this.props.history.push("/viewAllInvestors");
  }
  formsOfLawyer() {
    this.props.history.push("/formsOfLawyer");
  }
  lawyerview() {
    this.props.history.push("/Lawyershowmyforms");
  }
  constructor(props) {
    super(props);
    this.state = {};
    // this.connecToServer = this.connecToServer.bind(this);
  }

  reviewrview() {
    this.props.history.push("/reviewershowmyforms");
  }
  update() {
    this.props.history.push("/update");
  }
  viewInvestor() {
    this.props.history.push("/investor");
  }
  viewReviewers() {
    this.props.history.push("/reviewers");
  }
  invUpdate() {
    this.props.history.push("/invUpdate");
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
  searchBar() {
    this.props.history.push("/searchBar");
  }
  caseRe() {
    this.props.history.push("/case");
  }

  adminARC() {
    this.props.history.push("/adminARC");
  }
  assignLaw() {
    this.props.history.push("/assignLaw");
  }
  lawyerfilter() {
    this.props.histroy.push("/filterCase");
  }
  lawUp() {
    this.props.history.push("/lawyerUpdate");
  }

  updateUser() {
    this.props.history.push("/updateUser");
  }

  getUser() {
    this.props.history.push("/getUser");
  }

  assignRev() {
    this.props.history.push("/assignRev");
  }

  _handleLogout = () => {
    this.Auth.logout();

    this.props.history.replace("/");
  };

  render() {
    return (
      <div className="HomePage">
        <div className="App-header">
          <h2>Welcome Home</h2>
        </div>

        <div>
          To view Pending and Approved companies
          <button
            className="btn btn-primary width-150"
            onClick={e => {
              this.viewInvestor();
            }}
          >
            login
          </button>
        </div>
        <div>
          lawyer fill form
          <button
            className="btn btn-primary width-150"
            onClick={e => {
              this.LawyerFillForm();
            }}
          >
            lawyer fill form
          </button>
        </div>
        <div>
          filter case
          <button
            className="btn btn-primary width-150"
            onClick={e => {
              this.filter();
            }}
          >
            to filter
          </button>
        </div>

        <div>
          To view lawyer form push here
          <button
            className="btn btn-primary width-150"
            onClick={e => {
              this.lawyerview();
            }}
          >
            Click to show
          </button>
        </div>
        <div>
          To view reviewr form Press here
          <button
            className="btn btn-primary width-150"
            onClick={e => {
              this.reviewrview();
            }}
          >
            Click to view
          </button>
        </div>
        <div>
          To Update Press here
          <button
            className="btn btn-primary width-150"
            onClick={e => {
              this.update();
            }}
          >
            Click to Update
          </button>
        </div>

        <div>
          To view employee table
          <button
            className="btn btn-primary width-150"
            onClick={e => {
              this.employeeTable();
            }}
          >
            Click to view
          </button>
        </div>
        <div>
          To view form table
          <button
            className="btn btn-primary width-150"
            onClick={e => {
              this.formTable();
            }}
          >
            Click to view form
          </button>
        </div>
        <div>
          To view user table
          <button
            className="btn btn-primary width-150"
            onClick={e => {
              this.userTable();
            }}
          >
            Click to view user
          </button>
          <div>
            <button
              className="btn btn-primary width-150"
              onClick={e => {
                this._handleLogout();
              }}
            >
              LogOut
            </button>
          </div>
          <div>
            <button
              className="btn btn-primary width-150"
              onClick={e => {
                this.caseRe();
              }}
            >
              Case
            </button>
          </div>
        </div>
        <div>To search</div>
        <div>
          To search
          <button
            className="btn btn-primary width-150"
            onClick={e => {
              this.searchBar();
            }}
          >
            Click to search
          </button>
        </div>
        <div>
          To search
          <button
            className="btn btn-primary width-150"
            onClick={e => {
              this.searchBar();
            }}
          >
            Click to search
          </button>
        </div>

        <div>
          To update user
          <button
            className="btn btn-primary width-150"
            onClick={e => {
              this.updateUser();
            }}
          >
            Click to update
          </button>
        </div>

        <div>
          To get user
          <button
            className="btn btn-primary width-150"
            onClick={e => {
              this.getUser();
            }}
          >
            Click to get
          </button>
        </div>

        <div>
          To assign Reviewer
          <button
            className="btn btn-primary width-150"
            onClick={e => {
              this.assignRev();
            }}
          >
            Click to get
          </button>
        </div>

        <div>

        <div>
          To approve/reject form as an admin
          <div>
            <button
              className="btn btn-primary width-150"
              onClick={e => {
                this.adminARC();
              }}
            >
              Click to decide
            </button>
          </div>
          <div>
            To search
            <button
              className="btn btn-primary width-150"
              onClick={e => {
                this.searchBar();
              }}
            >
              Click to search
            </button>
          </div>
          <div>
            assign a lawyer
            <button
              className="btn btn-primary width-150"
              onClick={e => {
                this.assignLaw();
              }}
            >
              Click to assign
            </button>
          </div>

          To view publishedCompanies click here
          <button
            className="btn btn-primary width-150"
            onClick={e => {
              this.publishedCompanies();
            }}
          />
        </div>
        <div>
          investor Update Rejected Forms
          <button
            className="btn btn-primary width-150"
            onClick={e => {
              this.invUpdate();
            }}
          >
            Click to view
          </button>
        </div>

        <div>
          <button
            className="btn btn-primary width-150"
            onClick={e => {
              this.viewAllInvestors();
            }}
          >
            View All Investors
          </button>
        </div>

        <div>
          <button
            className="btn btn-primary width-150"
            onClick={e => {
              this.formsOfLawyer();
            }}
          >
            View Forms of Lawyer
          </button>
        </div>

        <div>
          <button
            className="btn btn-primary width-150"
            onClick={e => {
              this.lawyerFinalizedCases();
            }}
          >
            View Lawyers Finalized Cases
          </button>
        </div>
        <div>
          To view all Reviewers
          <button
            className="btn btn-primary width-150"
            onClick={e => {
              this.viewReviewers();
            }}
          >
            Click to view
          </button>
        </div>
        <div>
          To view all forms
          <button
            className="btn btn-primary width-150"
            onClick={e => {
              this.viewAllForms();
            }}
          >
            Click to view
          </button>
        </div>

        <div>
          Lawyer Update Form
          <button
            className="btn btn-primary width-150"
            onClick={e => {
              this.lawUp();
            }}
          >
            Click to Update
          </button>
        </div>
        <button
          className="btn btn-primary width-150"
          onClick={e => {
            this.searchBar();
          }}
        />
      </div>
    );
  }
}

export default HomePage;
