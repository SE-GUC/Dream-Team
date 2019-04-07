import React, { Component } from 'react';
import './case.css';

class Case extends Component {
  state = {
          formID:'',
         lawyer:'',
         reviewer:'',
    responseToPost  : '',
    Rres:'',
    Lres:'',
    lawyerName:'',
    reviewerName:''
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/internalPortal/'+this.state.formID+'/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
   
    });
   
const body = await response.json();
if(JSON.stringify(body).charAt(2)!=="m"){
if(!(JSON.stringify(body.data.lawyer)))
this.setState({Lres:"No lawyer for this form"})
else this.setState({lawyer:JSON.stringify(body.data.lawyer)
});
if(!(JSON.stringify(body.data.reviewer)))
this.setState({Lres:"No reviewer for this form"})
else this.setState({reviewer:JSON.stringify(body.data.reviewer)
});
this.setState({ responseToPost: ''
});
}else
  this.setState({ responseToPost: JSON.stringify(body.msg),lawyerName:'',reviewerName:'', Rres:'', Lres:'',lawyer:'',reviewer:''
  });

    if(this.state.lawyer){
    var body50 =  JSON.parse(this.state.lawyer);
    const response1 = await fetch('/api/user/user/getUser/'+body50+'/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
  
      });
      const body1 = await response1.json();
      this.setState({
        lawyerName:JSON.stringify(body1.data.name)
     })}


if(this.state.reviewer){
      var body500 =  JSON.parse(this.state.reviewer);
      const response2 = await fetch("/api/user/user/getUser/"+body500+"/", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },

      });
      
      const body2 = await response2.json();
      this.setState({
          reviewerName:JSON.stringify(body2.data.name)
      })
  };}

  
  render() {
    return (
      <div className="Case">
        <form onSubmit={this.handleSubmit}>
          <p>
          </p>
          Please insert Form ID:
          <input
            type="text"
            value={this.state.formID}
            onChange={e => this.setState({ formID:e.target.value })}
          />
         
          <button type="submit">search</button>
        </form>
        <p >{this.state.responseToPost}</p>
       Lawyer:
        <p>{this.state.Lres}</p>
        <p>{this.state.lawyerName}</p>
        Reviewer:
        <p>{this.state.Rres}</p>
        <p>{this.state.reviewerName}</p>
    
      </div>
    );
  }
}

export default Case;
