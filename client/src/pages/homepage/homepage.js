import React, { Component } from 'react';
import '../homepage/homepage.css';
import Login from '../../components/login'
import Table from '../../components/userTable'
import Tableform from '../../components/formTable'
import AuthHelperMethods from './components/AuthHelperMethods';
import withAuth from './components/withAuth';

class HomePage extends Component {
  Auth = new AuthHelperMethods();

  _handleLogout = () => {

    this.Auth.logout()
    
    this.props.history.replace('/api/login');
    
    }

  render() {
    return (
      <div className="HomePage">
        IN HomePage.JS
        <Login/>
       <Table ApiURL='api/user/getUsers'/>
        <Tableform/>
      </div>
    );
  }
}

export default withAuth(HomePage);
