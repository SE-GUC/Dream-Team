import React, { Component } from 'react';
import './LawyerViewhisCases.css';
import { Table } from 'reactstrap';
import { jsxOpeningElement } from '@babel/types';
class Lview extends Component {
  state = {
          lawyerID:'',
    responseToPost  : []
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/lawyer/pendingCase/'+this.state.lawyerID, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    //   body: JSON.stringify({ _id:this.state.formID })
    })
   
   
    const body = await response.json();

this.setState({ responseToPost: JSON.stringify(body)
    });


  ;}

  
  render() {
   
    return (

      <div >
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Me as a lawyer I should get my decided forms</strong>
          </p>
          Lawyer ID:
          <input
            type="text"
            value={this.state.lawyerID}
            onChange={e => this.setState({ lawyerID:e.target.value })}
          />
         
          <button type="submit">search</button>
        </form>
        <p>{this.state.responseToPost}</p>
        <p>{this.state.lawyerID}</p>
      
        

       
        
    
      </div>
    );
  }
}

export default Lview;
