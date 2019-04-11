import React, { Component } from 'react';
import './assignRev.css';
import { Table } from 'reactstrap';

class assignRev extends Component {
  state = {
         formID:'',
         revID:'',
         responseToPost  : '',
   
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/reviewer/reviewer/assign/'+this.state.formID+"/"+this.state.revID+'/', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
   
    }).catch(err => {
      alert(JSON.stringify(err));
      
    });
    const body = await response.text();
    if(body.charAt(2)=="m"){

this.setState({ responseToPost:body})
}else
{this.setState({ responseToPost:"The form or reviewer IDs you entered is incorrect"})}
  }
  
  render() {
    return (
      <body className="AssignRev">
        <form onSubmit={this.handleSubmit}>
         
          Please insert Form ID:
          <input
            type="text"
            value={this.state.formID}
            onChange={e => this.setState({ formID:e.target.value })}
          />

         Please insert your Reviewer ID:
          <input
            type="text"
            value={this.state.revID}
            onChange={e => this.setState({ revID:e.target.value })}
          />
         
          <button type="submit">assign me</button>
        </form>
        <p >{this.state.responseToPost}</p>
      
    
      </body>
    );
  }
}

export default assignRev;
