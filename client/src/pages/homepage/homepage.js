import React, { Component } from 'react';
import '../homepage/homepage.css';
import Login from '../../components/login'
import SignUp from '../../components/signup';
import Table from '../../components/userTable'
import Tableform from '../../components/formTable'
import AuthHelperMethods from './components/AuthHelperMethods';
import withAuth from './components/withAuth';

class HomePage extends Component {
  state = {
    
  };
  update(){
    this.props.history.push('/update');
    
    }
login(){
  this.props.history.push('/login'); 
  }

  Auth = new AuthHelperMethods();

  _handleLogout = () => {

    this.Auth.logout()
    
    this.props.history.replace('/api/login');
    
    }

  render() {
    return (
      <div className="App">
    <div className="App-header">
    
      <h2>Welcome Home</h2>
    </div>
    <div>
   To Login Press here
   <button  className ="btn btn-primary width-150" onClick={(e) => { this.login()} }>Click to login</button>
   
   </div>
   <div>
   To Update Press here
   <button  className ="btn btn-primary width-150" onClick={(e) => { this.update()} }>Click to Update</button>

    
      <div className="HomePage">
        IN HomePage.JS
        <Login/>
        <SignUp/>
       <Table ApiURL='api/user/getUsers'/>
        <Tableform/>
      </div>
      </div>
      </div>
    );
  }
}

export default withAuth(HomePage);
