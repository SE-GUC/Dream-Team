import React, { Component } from "react";
import "./updateUser.css";
import { Form, Button, Col } from "react-bootstrap";
import Popup from "reactjs-popup";
const axios = require('axios');
class Update extends Component {
  state = {
    name: "",
    accountType: "",
    // accountStatus: "",
    // gender: "",
    // nationality: "",
    email: "",
    password: "",
    typeID: "",
    numberID: "",
    phoneNumber: "",
    faxNumber: "",
    // dateOfBirth: "",
    address: "",
    // investorType: "",
    // capital: "",
    // capitalCurrency: "",
    responseToPost: ""
  };

  handleSubmit = async e => {
    e.preventDefault();
    const data = {
      name: this.state.name,
    //   accountType: this.state.accountType,
    //   accountStatus: "false",
    //   gender: this.state.gender,
    //   nationality: this.state.nationality,
      email: this.state.email,
      password: this.state.password,
      typeID: this.state.typeID,
      numberID: this.state.numberID,
      phoneNumber: this.state.phoneNumber,
      faxNumber: this.state.faxNumber,
    //   dateOfBirth: this.state.dateOfBirth,
      address: this.state.address,
    //   investorType: this.state.investorType,
    //   capital: this.state.capital,
    //   capitalCurrency: this.state.capitalCurrency
    };
    const response = await fetch("api/user/updateUser/5ca0724a1b92a9227067c756", {
      method: "PUT",
     body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name:this.state.name,
      //   accountType: this.state.accountType, gender: this.state.gender, nationality: this.state.nationality, 
          email:this.state.email , password:this.state.password,
    typeID:this.state.typeID, numberID: this.state.numberID, phoneNumber: this.state.phoneNumber, faxNumber: this.state.faxNumber, address: this.state.address
   // , dateoOfBirth: this.state.dateOfBirth, investorType: this.state.investorType, capital: this.state.capital, capitalCurrency: this.state.capitalCurrency
}),
    }).catch(err => {
      alert(err);
      
    });
    const body = await response.text();
    this.setState({ responseToPost: body });
    this.props.history.replace("/updateUser");
   
  };

  render() {
    return (
      <div className="UpdateUser">
        <Form onSubmit={this.handleSubmit}>
          <Form.Row>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name *</Form.Label>
              <Form.Control
                type="name"
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAccountType">
              {" "}
              <Form.Label>Account Type*</Form.Label>
              <Form.Control
               
                value={this.state.accountType}
                onChange={e => this.setState({ accountType: e.target.value })}
                readOnly
              >
              
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridGender">
              <Form.Label>Gender *</Form.Label>
              <Form.Control
                value={this.state.gender}
                onChange={e => this.setState({ gender: e.target.value })}
                readOnly
              >
                
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridNationality">
              <Form.Label>Nationality *</Form.Label>
              <Form.Control
                type="nationality"
                value="brazillian"
                onChange={e => this.setState({ nationality: e.target.value })}
                readOnly
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email *</Form.Label>
              <Form.Control
                type="email"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password *</Form.Label>
              <Form.Control
                type="password"
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridTypeID">
              <Form.Label>Type of ID *</Form.Label>
              <Form.Control
                type="typeID"
                value={this.state.typeID}
                onChange={e => this.setState({ typeID: e.target.value })}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridNumberID">
              <Form.Label>Number of ID *</Form.Label>
              <Form.Control
                type="numberID"
                value={this.state.nationality}
                onChange={e => this.setState({ numberID: e.target.value })}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridPhoneNumber">
              <Form.Label>Phone Number *</Form.Label>
              <Form.Control
                type="phoneNumber"
                value={this.state.phoneNumber}
                onChange={e => this.setState({ phoneNumber: e.target.value })}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridFaxNumber">
              <Form.Label>Fax Number *</Form.Label>
              <Form.Control
                type="faxNumber"
                value={this.state.faxNumber}
                onChange={e => this.setState({ faxNumber: e.target.value })}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridDateofBirth">
              <Form.Label>Date of Birth *</Form.Label>
              <Form.Control
                type="dateOfBirth"
                value={this.state.dateOfBirth}
                onChange={e => this.setState({ dateOfBirth: e.target.value })}
                readOnly
              />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress">
            <Form.Label>Address *</Form.Label>
            <Form.Control
              value={this.state.address}
              onChange={e => this.setState({ address: e.target.value })}
            />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridInvestorType">
              <Form.Label>Investor Type</Form.Label>
              <Form.Control
                type="investorType"
                value={this.state.investorType}
                onChange={e => this.setState({ investorType: e.target.value })}
                readOnly
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCapital">
              <Form.Label>Capital</Form.Label>
              <Form.Control
                type="capital"
                value={this.state.capital}
                onChange={e => this.setState({ capital: e.target.value })}
                readOnly
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCapitalCurrency">
              <Form.Label>Capital Currency</Form.Label>
              <Form.Control
                type="capitalCurrency"
                value={this.state.capitalCurrency}
                onChange={e =>
                  this.setState({ capitalCurrency: e.target.value })
                }
                readOnly
              />
            </Form.Group>
          </Form.Row>

          <div>{this.state.responseToPost}</div>
          <Popup
            trigger={
              <Button variant="primary" type="submit">
                update
              </Button>
            }
            position="bottom center"
          >
            <div>{this.state.responseToPost}</div>
          </Popup>
        </Form>
      </div>
    );
  }
}

export default Update;
