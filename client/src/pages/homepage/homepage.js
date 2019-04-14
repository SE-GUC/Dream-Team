import React, { Component } from "react";
<<<<<<< HEAD
import '../homepage/homepage.css';
import AuthHelperMethods from  '../../components/AuthHelperMethods';
import X from '../../components/ReviewerViewhisForms/ReviewerViewhisForms'
import Login from '../../components/login'
import Tableform from '../../components/formTable'
import LawyerCase from '../../components/lawyerCase'
import ReviewerCase from '../../components/reviewerCase'
import Lawyerview from '../../components/LawyerViewhisCases'
import formTable from '../../components/formTable';
import SignUp from '../../components/signup';
import Table from '../../components/usertable/userTable';
=======
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
import Table from "../../components/userTable/userTable";
import Layout from "../../components/layout/layout";
>>>>>>> backEnd
// import Tableform from '../../components/formTable';
import searchBar from "../../components/searchBar";
// import AuthHelperMethods from '../../components/AuthHelperMethods';
<<<<<<< HEAD
import withAuth from '../../components/withAuth';
//import filter from '../../components/filterCase';
import LawyerFillForm from '../../components/LawyerFillForm';
class HomePage extends Component {
  Auth = new AuthHelperMethods();
  state = {};
  filter(){
    this.props.history.push('/filter');
  }
  LawyerFillForm(){
    this.props.history.push('/LawyerFillForm');
  }
  lawyerview(){
    this.props.history.push('/Lawyershowmyforms');

=======
import withAuth from "../../components/withAuth";

class HomePage extends Component {
  Auth = new AuthHelperMethods();
  state = {};
  constructor(props) {
    super(props);
    this.state = {};
    // this.connecToServer = this.connecToServer.bind(this);
  }
  lawyerview() {
    this.props.history.push("/Lawyershowmyforms");
>>>>>>> backEnd
  }
  reviewrview() {
    this.props.history.push("/reviewershowmyforms");
  }
  update() {
<<<<<<< HEAD

    this.props.history.push('/update');

=======
    this.props.history.push("/update");
>>>>>>> backEnd

    this.props.history.push("/update");
  }
  viewInvestor() {
    this.props.history.push("/investor");
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
<<<<<<< HEAD
 // Auth = new AuthHelperMethods();
=======
>>>>>>> backEnd
  caseRe() {
    this.props.history.push("/case");
  }
<<<<<<< HEAD
  lawyerfilter(){
    this.props.histroy.push("/filterCase");
  }
=======
>>>>>>> backEnd

  _handleLogout = () => {
    this.Auth.logout();

    this.props.history.replace("/login");
  };

  // connecToServer() {
  //   fetch("/");
  // }

  // componentDidMount() {
  //   this.connecToServer();
  // }


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
<<<<<<< HEAD
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
=======
          />
>>>>>>> backEnd
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
      </div>
    );
  }
}

export default HomePage;
