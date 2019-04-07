import React, { Component } from 'react';
import './reviewerCase.css';

class Case extends Component {
  state = {
          reviewerID:'',
    responseToPost  : ''
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/reviewer/reviewer/reviewer/AR/'+this.state.reviewerID+'/', {
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

export default Case;
