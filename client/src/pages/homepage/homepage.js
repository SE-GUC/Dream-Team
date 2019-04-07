import React, { Component } from 'react';
import '../homepage/homepage.css';
import X from '../../components/ReviewerViewhisForms/ReviewerViewhisForms'

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
