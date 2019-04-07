import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/homepage';
import Login from './components/login';
import UpdateTest from './components/updateTest';
import EmployeeTable from './components/employeeTable';
import SignUp from './components/signup';
import FormTable from './components/formTable';
import LawyerViewhisCases from './components/LawyerViewhisCases'
import UserTable from './components/userTable/userTable';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Case from './pages/LRspecificCase';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import ReviewerViewhisForms from './components/ReviewerViewhisForms'
ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/update" component={UpdateTest} />
      <Route path="/employeeTable" component={EmployeeTable} />
      <Route path="/formTable" component={FormTable} />
      <Route path="/userTable" component={UserTable} />
      <Route path="/reviewershowmyforms" component={ReviewerViewhisForms} />
      <Route path="/Lawyershowmyforms" component={LawyerViewhisCases} />
      
    </div>
  </Router>,
  document.getElementById('root')
);
