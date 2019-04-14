import React, { Component } from "react";
import "../homepage/homepage.css";
import AuthHelperMethods from "../../components/AuthHelperMethods";
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
// import Tableform from '../../components/formTable';
import searchBar from "../../components/searchBar";
// import AuthHelperMethods from '../../components/AuthHelperMethods';
import withAuth from "../../components/withAuth";

class HomePage extends Component {
  Auth = new AuthHelperMethods();
  state = {};

  // constructor(props) {
  //   super(props);
  //   this.state = {};
  //   // this.connecToServer = this.connecToServer.bind(this);
  // }
  constructor(props) {
    super(props);
    this.state = {};
    this.connecToServer = this.connecToServer.bind(this);
  }

  componentDidMount() {
    this.connecToServer();
  }
  connecToServer() {
    fetch("/");
  }

  viewAllForms() {
    this.props.history.push("/viewAllForms");
  }
  lawyerview() {
    this.props.history.push("/Lawyershowmyforms");
  }
  reviewrview() {
    this.props.history.push("/reviewershowmyforms");
  }
  update() {
    this.props.history.push("/update");

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

  lawUp() {
    this.props.history.push("/lawyerUpdate");
  }

  _handleLogout = () => {
    this.Auth.logout();

    this.props.history.replace("/login");
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
          />
        </div>

        <div>
          To view lawyer form push here
          <button
            className="btn btn-primary width-150"
            onClick={e => {
              this.lawyerview();
            }}
          />
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

        <dev>
          Lawyer Update Form
          <button
            className="btn btn-primary width-150"
            onClick={e => {
              this.lawUp();
            }}
          >
            Click to Update
          </button>
        </dev>
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
