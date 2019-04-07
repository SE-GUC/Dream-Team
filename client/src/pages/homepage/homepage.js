import React, { Component } from 'react';
import '../homepage/homepage.css';
import Login from '../../components/login';
// import Table from '../../components/userTable'
import Tableform from '../../components/formTable';
class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        IN HomePage.JS
        <Login />
        {/* <Table/> */}
        <Tableform />
      </div>
    );
  }
}

export default HomePage;
