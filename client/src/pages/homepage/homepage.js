import React, { Component } from 'react';
import '../homepage/homepage.css';
import Login from '../../components/login'
import Tablee from '../../components/userTable'
import Tableform from '../../components/formTable'
import LawyerCase from '../../components/lawyerCase'
import ReviewerCase from '../../components/reviewerCase'
class HomePage extends Component {
  // state = {
    
  // };

  // componentDidMount() {
  //   this.callApi()
  //     .then(res => this.setState({ response: res.data[0].name }))
  //     .catch(err => console.log(err));
  // }

  // callApi = async () => {
  //   const response = await fetch('/api/user/getUsers');
  //   const body = await response.json();

  //   if (response.status !== 200) throw Error(body.message);

  //   return body;
  // };
 
  render() {
    return (
      <div className="HomePage">
       
        {/* IN HomePage.JS */}
        {/* <Login/> */}
        <Tablee/>
        {/* <Tableform/> */}
        {/* <LawyerCase/> */}
        {/* <ReviewerCase/> */}
      </div>
    );
  }
}

export default HomePage;
