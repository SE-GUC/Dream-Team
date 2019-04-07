
import React, { Component } from "react";
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
import Table from '../../components/userTable/userTable';
import withAuth from '../../components/withAuth';


class HomePage extends Component {
  Auth = new AuthHelperMethods();
  state = {};
  lawyerview(){
    this.props.history.push('/Lawyershowmyforms');

  }
  reviewrview(){
    this.props.history.push('/reviewershowmyforms');
  }
  update() {

    this.props.history.push('/update');

    this.props.history.push("/update");

  }
  viewInvestor() {
    this.props.history.push("/investor");


  }
  login() {
    this.props.history.push('/login');
  }
  signUp() {
    this.props.history.push('/signup');
  }
  userTable() {
    this.props.history.push('/userTable');
  }
  employeeTable() {
    this.props.history.push('/employeeTable');
  }
  formTable() {
    this.props.history.push('/formTable');
  }
  caseRe() {
    this.props.history.push('/case');
  }
  

  _handleLogout = () => {

    this.Auth.logout()
    
    this.props.history.replace('/login');
    
    }

  render() {
    return (
      <div className="HomePage">
        <div className="App">
          <div className="App-header">
          

            <h2>Welcome Home</h2>
          </div>
        </div>
        <div>
          To Login Press here
          <button
            className="btn btn-primary width-150"
            onClick={e => {
              this.login();
            }}
          >
            Click to login
          </button>
        </div>

        <div>
          To view Pending and Approved companies
          <button
            className="btn btn-primary width-150"
            onClick={e => {
              this.viewInvestor();
            }}
            >
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
          To SignUp press here
          <button
            className="btn btn-primary width-150"
            onClick={e => {
              this.signUp();
            }}
          >
            Click to signup
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

      </div>


    );
  }
}

export default HomePage;
