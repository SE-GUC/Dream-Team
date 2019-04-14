import React, { Component } from 'react';
import './case.css';
import { Table } from 'reactstrap';

class Case extends Component {
  state = {
          formID:'',
         lawyer:'',
         reviewer:'',
    responseToPost  : '',
    Rres:'',
    Lres:'',


    lawyerName:'',
    lawyerEmail:'',
    lawyerAccountType:'',
    lawyerGender:'',
    lawyerNationality:'',
    lawyerTypeID:'',
    lawyerNumberID:'',
    lawyerDateOfBirth:'',
    lawyerAddress:'',
    lawyerPhoneNumber:'',
    lawyerFaxNumber:'',
    lawyerAccountStatus:'',
    lawyerRejectionMessage:'',


    reviewerName:'',
    reviewerEmail:'',
    reviewerAccountType:'',
    reviewerGender:'',
    reviewerNationality:'',
    reviewerTypeID:'',
    reviewerNumberID:'',
    reviewerDateOfBirth:'',
    reviewerAddress:'',
    reviewerPhoneNumber:'',
    reviewerFaxNumber:'',
    reviewerAccountStatus:'',
    reviewerRejectionMessage:'',



  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/internalPortal/form/'+this.state.formID+'/', {
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
  this.setState({ responseToPost: JSON.stringify(body.msg),lawyerName:'',reviewerName:'', Rres:'', Lres:'',lawyer:'',reviewer:'',lawyerEmail:'',
  lawyerAccountType:'',
  lawyerGender:'',
  lawyerNationality:'',
  lawyerTypeID:'',
  lawyerNumberID:'',
  lawyerDateOfBirth:'',
  lawyerAddress:'',
  lawyerPhoneNumber:'',
  lawyerFaxNumber:'',
  lawyerAccountStatus:'',
  lawyerRejectionMessage:'',
  reviewerEmail:'',
  reviewerAccountType:'',
  reviewerGender:'',
  reviewerNationality:'',
  reviewerTypeID:'',
  reviewerNumberID:'',
  reviewerDateOfBirth:'',
  reviewerAddress:'',
  reviewerPhoneNumber:'',
  reviewerFaxNumber:'',
  reviewerAccountStatus:'',
  reviewerRejectionMessage:'',
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
        lawyerName:JSON.stringify(body1.data.name),
        lawyerEmail:JSON.stringify(body1.data.email),
        lawyerAccountType:JSON.stringify(body1.data.accountType),
        lawyerGender:JSON.stringify(body1.data.gender),
        lawyerNationality:JSON.stringify(body1.data.nationality),
        lawyerTypeID:JSON.stringify(body1.data.typeID),
        lawyerNumberID:JSON.stringify(body1.data.numberID),
        lawyerDateOfBirth:JSON.stringify(body1.data.dateOfBirth),
        lawyerAddress:JSON.stringify(body1.data.address),
        lawyerPhoneNumber:JSON.stringify(body1.data.phoneNumber),
        lawyerFaxNumber:JSON.stringify(body1.data.faxNumber),
        lawyerAccountStatus:JSON.stringify(body1.data.accountStatus),
        lawyerRejectionMessage:JSON.stringify(body1.data.rejectionMessage),
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
          reviewerName:JSON.stringify(body2.data.name),
          reviewerEmail:JSON.stringify(body2.data.email),
          reviewerAccountType:JSON.stringify(body2.data.accountType),
          reviewerGender:JSON.stringify(body2.data.gender),
          reviewerNationality:JSON.stringify(body2.data.nationality),
          reviewerTypeID:JSON.stringify(body2.data.typeID),
          reviewerNumberID:JSON.stringify(body2.data.numberID),
          reviewerDateOfBirth:JSON.stringify(body2.data.dateOfBirth),
          reviewerAddress:JSON.stringify(body2.data.address),
          reviewerPhoneNumber:JSON.stringify(body2.data.phoneNumber),
          reviewerFaxNumber:JSON.stringify(body2.data.faxNumber),
          reviewerAccountStatus:JSON.stringify(body2.data.accountStatus),
          reviewerRejectionMessage:JSON.stringify(body2.data.rejectionMessage)
      })
  };}

  
  render() {
    return (
      <body className="Case">
        <form onSubmit={this.handleSubmit}>
         
          Please insert Form ID:
          <input
            type="text"
            value={this.state.formID}
            onChange={e => this.setState({ formID:e.target.value })}
          />
         
          <button type="submit">search</button>
        </form>
        <p >{this.state.responseToPost}</p>
        <p>{this.state.Lres}</p>
        <p>{this.state.Rres}</p>
       Lawyer:
       
        <Table dark hover bordered>
        <thead>
          <tr>
            <th> name </th>
            <th> email  </th>
            <th> accountType </th>
            <th> gender </th>
            <th> nationality </th>
            <th> typeID </th>
            <th> numberID </th>
            <th> dateOfBirth </th>
            <th> address </th>
            <th> phoneNumber </th>
            <th> faxNumber </th>
            <th> accountStatus </th>
            <th> rejectionMessage </th>
            
          </tr>
        </thead>
        <tbody>
          { <tr>
              <td>{this.state.lawyerName}</td>
              <td>{this.state.lawyerEmail}</td>
              <td>{this.state.lawyerAccountType}</td>
              <td>{this.state.lawyerGender}</td>
              <td>{this.state.lawyerNationality}</td>
              <td>{this.state.lawyerTypeID}</td>
              <td>{this.state.lawyerNumberID}</td>
              <td>{this.state.lawyerDateOfBirth}</td>
              <td>{this.state.lawyerAddress}</td>
              <td>{this.state.lawyerPhoneNumber}</td>
              <td>{this.state.lawyerFaxNumber}</td>
              <td>{this.state.lawyerAccountStatus}</td>
              <td>{this.state.lawyerRejectionMessage}</td>
              </tr>

          }
        </tbody>
      </Table>
        Reviewer:
        
        <Table dark hover bordered>
        <thead>
          <tr>
            <th> name </th>
            <th> email  </th>
            <th> accountType </th>
            <th> gender </th>
            <th> nationality </th>
            <th> typeID </th>
            <th> numberID </th>
            <th> dateOfBirth </th>
            <th> address </th>
            <th> phoneNumber </th>
            <th> faxNumber </th>
            <th> accountStatus </th>
            <th> rejectionMessage </th>
            
          </tr>
        </thead>
        <tbody>
          { <tr>
              <td>{this.state.reviewerName}</td>
              <td>{this.state.reviewerEmail}</td>
              <td>{this.state.reviewerAccountType}</td>
              <td>{this.state.reviewerGender}</td>
              <td>{this.state.reviewerNationality}</td>
              <td>{this.state.reviewerTypeID}</td>
              <td>{this.state.reviewerNumberID}</td>
              <td>{this.state.reviewerDateOfBirth}</td>
              <td>{this.state.reviewerAddress}</td>
              <td>{this.state.reviewerPhoneNumber}</td>
              <td>{this.state.reviewerFaxNumber}</td>
              <td>{this.state.reviewerAccountStatus}</td>
              <td>{this.state.reviewerRejectionMessage}</td>
              </tr>

          }
        </tbody>
      </Table>
      </body>
    );
  }
}

export default Case;
