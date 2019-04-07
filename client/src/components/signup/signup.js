import React, { Component } from 'react';
import './signup.css';
import {Form , Button,Col} from 'react-bootstrap'
import Popup from 'reactjs-popup';

class SignUp extends Component {
  state = {
          name: '',
          accountType: '',
          gender: '',
          nationality: '',
          email:'',
          password :'',
          typeID: '',
          numberID: '',
          phoneNumber: '',
          faxNumber: '',
          dateOfBirth: '',
          address: '',
          investorType: '',
          capital:'',
          capitalCurrency: '',
          responseToPost: ''
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/user/createUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name:this.state.name, accountType: this.state.accountType, gender: this.state.gender, nationality: this.state.nationality,  email:this.state.email , password:this.state.password,
    typeID:this.state.typeID, numberID: this.state.numberID, phoneNumber: this.state.phoneNumber, faxNumber: this.state.faxNumber, dateoOfBirth: this.state.dateOfBirth, address: this.state.address, investorType: this.state.investorType, capital: this.state.capital, capitalCurrency: this.state.capitalCurrency}),
    }).catch(err => {
      alert(err);
    });
    const body = await response.text();
    this.setState({ responseToPost: body });
    // this.props.history.replace("/login");
    // this.setState({ responseToPost: body });
  };





render(){
return (
  <div className="signup">

<Form onSubmit={this.handleSubmit}>

 <Form.Row>
    <Form.Group as={Col} controlId="formGridName">
      <Form.Label>Name *</Form.Label>
      <Form.Control type="name" placeholder="Enter your full name" />
    </Form.Group>

     <Form.Group as={Col} controlId="formGridAccountType">         <Form.Label>Account Type</Form.Label>
      <Form.Control as="select">
       <option>Choose</option>
        <option>Investor</option>
        <option>Lawyer</option>
        <option>Admin</option>       
         <option>Reviewer</option>
      </Form.Control>
    </Form.Group>
  </Form.Row>
  
   <Form.Row>  
   <Form.Group as={Col} controlId="formGridGender">      
   <Form.Label>Gender</Form.Label>
      <Form.Control as="select">
       <option>Choose</option>
        <option>Female</option>
        <option>Male</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridNationality">
      <Form.Label>Nationality *</Form.Label>
      <Form.Control type="nationality" placeholder="Enter your nationality" />
    </Form.Group>
  </Form.Row>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email *</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password *</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>
  
   <Form.Row>  
     <Form.Group as={Col} controlId="formGridTypeID">
      <Form.Label>Type of ID *</Form.Label>
      <Form.Control type="typeID" placeholder="Enter the type of your ID" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridNumberID">
      <Form.Label>Number of ID *</Form.Label>
      <Form.Control type="numberID" placeholder="Enter the number of your ID" />
    </Form.Group>
  </Form.Row>
  
  
  <Form.Row>   
      <Form.Group as={Col} controlId="formGridPhoneNumber">
      <Form.Label>Phone Number *</Form.Label>
      <Form.Control type="phoneNumber" placeholder="Enter your phone number" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridFaxNumber">
      <Form.Label>Fax Number *</Form.Label>
      <Form.Control type="faxNumber" placeholder="Enter your fax number" />
    </Form.Group>
  </Form.Row>
  
   <Form.Row>       
     <Form.Group as={Col} controlId="formGridDateofBirth">
      <Form.Label>Date of Birth *</Form.Label>
      <Form.Control type="dateOfBirth" placeholder="Enter your date of birth" />
    </Form.Group>
  </Form.Row>

  <Form.Row>    
  <Form.Label>Date of Birth *</Form.Label>
  {/* <DatePicker/>  */}
  </Form.Row>


  <Form.Group controlId="formGridAddress">
    <Form.Label>Address *</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>
  
   <Form.Row>    
   <Form.Group as={Col} controlId="formGridInvestorType">
      <Form.Label>Investor Type</Form.Label>
      <Form.Control  type="investorType" placeholder="Enter type of Investor"  />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridCapital">
      <Form.Label>Capital</Form.Label>
      <Form.Control  type="capital" placeholder="Enter your Capital"  />
       
    </Form.Group>

    <Form.Group as={Col} controlId="formGridCapitalCurrency">
      <Form.Label>Capital Currency</Form.Label>
      <Form.Control  type="capitalCurrency" placeholder="Enter the currency of your capital"  />
    </Form.Group>
  </Form.Row>


  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Popup
            trigger={
              <Button variant="primary" type="submit">
                Submit
              </Button>
            }
            position="bottom center"
          >
            <div>{this.state.responseToPost}</div>
          </Popup>
</Form>
</div>
)
}
}

export default SignUp;