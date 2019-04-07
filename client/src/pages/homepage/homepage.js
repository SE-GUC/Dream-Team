import React, { Component } from 'react';
import '../homepage/homepage.css';
import Login from '../../components/login'
import Table from '../../components/usertable/usertable'
class HomePage extends Component {
 
  render() {
    return (
      <div className="HomePage">
        IN HomePage.JS
        <Login/>
        <Table ApiURL='api/user/getUsers'/>
      </div>
    );
  }
}

export default HomePage;
