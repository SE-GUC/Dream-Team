import React, { Component } from 'react';

import { Table } from 'reactstrap';
import { jsxOpeningElement } from '@babel/types';
class review extends Component {
  state = {
          reviewerID:'',
    responseToPost  : []
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/reviewer/pendingCase/'+this.state.reviewerID, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
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
            <strong>Me as a reviewer i should be able to view my working forms</strong>
          </p>
          Reviewer ID:
          <input
            type="text"
            value={this.state.reviewerID}
            onChange={e => this.setState({ reviewerID:e.target.value })}
          />
         
          <button type="submit">search</button>
        </form>
        <p>{this.state.responseToPost}</p>
        <p>{this.state.reviewerID}</p>
      </div>
    );
  }
}

export default review;
