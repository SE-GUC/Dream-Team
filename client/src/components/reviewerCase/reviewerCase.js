import React, { Component } from 'react';
import './reviewerCase.css';

class Case extends Component {
  state = {
    responseToPost  : ''
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/reviewer/AR', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    //   body: JSON.stringify({ _id:this.state.formID })
    });
    const body = await response.text();

this.setState({ responseToPost:body
    });


  ;}

  
  render() {
    return (
      <div className="ReviewerCase">
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Me as a Reviewer I should get my decided forms</strong>
          </p>
         
         
          <button type="submit">search</button>
        </form>
        <p>{this.state.responseToPost}</p>
        <p>{this.state.reviewerID}</p>
        
    
      </div>
    );
  }
}

export default Case;
