import React, { Component } from 'react';
import '../homepage/homepage.css';
import AuthHelperMethods from  '../../components/AuthHelperMethods';


class HomePage extends Component {
  Auth = new AuthHelperMethods();
  state = {};
  update() {
    this.props.history.push('/update');
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
  
  _handleLogout = () => {

    this.Auth.logout()
    
    this.props.history.replace('/login');
    
    }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome Home</h2>
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
        </div>
      </div>
    );
  }
}

export default HomePage;
