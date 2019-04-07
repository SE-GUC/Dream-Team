import React, { Component } from 'react';
import '../homepage/homepage.css';
import X from '../../components/ReviewerViewhisForms/ReviewerViewhisForms'
// import review from '../../components/Reviewer\ViewhisForms'
import Login from '../../components/login'
import Tableuser from '../../components/userTable/table'
import Tableform from '../../components/formTable'
import LawyerCase from '../../components/lawyerCase'
import ReviewerCase from '../../components/reviewerCase'
import Lawyerview from '../../components/LawyerViewhisCases'
import formTable from '../../components/formTable';


class HomePage extends Component {
  
  state = {
  
  };

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
         
        <X/>
        <Tableform/>
        {/* <LawyerCase/> */}
        {/* <ReviewerCase/> */}
      </div>
    );
  }
}

export default HomePage;
