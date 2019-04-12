import React, { Component } from "react";
import "./signup.css";
import { Form, Button, Col } from "react-bootstrap";
import Popup from "reactjs-popup";

class SignUp extends Component {
  state = {
    name: "",
    accountType: "",
    accountStatus: "",
    gender: "",
    nationality: "",
    email: "",
    password: "",
    typeID: "",
    numberID: "",
    phoneNumber: "",
    faxNumber: "",
    dateOfBirth: "",
    address: "",
    investorType: "",
    capital: "",
    capitalCurrency: "",
    responseToPost: ""
  };

  handleSubmit = async e => {
    // e.preventDefault();
    const data = {
      name: this.state.name,
      accountType: this.state.accountType,
      accountStatus: "false",
      gender: this.state.gender,
      nationality: this.state.nationality,
      email: this.state.email,
      password: this.state.password,
      typeID: this.state.typeID,
      numberID: this.state.numberID,
      phoneNumber: this.state.phoneNumber,
      faxNumber: this.state.faxNumber,
      dateOfBirth: this.state.dateOfBirth,
      address: this.state.address,
      investorType: this.state.investorType,
      capital: this.state.capital,
      capitalCurrency: this.state.capitalCurrency
    };
    const response = await fetch("api/user/createUser", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        accountType: this.state.accountType,
        gender: this.state.gender,
        nationality: this.state.nationality,
        email: this.state.email,
        password: this.state.password,
        typeID: this.state.typeID,
        numberID: this.state.numberID,
        phoneNumber: this.state.phoneNumber,
        faxNumber: this.state.faxNumber,
        dateoOfBirth: this.state.dateOfBirth,
        address: this.state.address,
        investorType: this.state.investorType,
        capital: this.state.capital,
        capitalCurrency: this.state.capitalCurrency
      })
    }).catch(err => {
      alert(err);
    });
    const body = await response.text();
    this.setState({ responseToPost: body });
    this.props.history.replace("/login");
  };

  render() {
    return (
      <div className="signup">
        <Form onSubmit={this.handleSubmit}>
          <Form.Row>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name *</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter your name"
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAccountType">
              {" "}
              <Form.Label>Account Type*</Form.Label>
              <Form.Control
                as="select"
                value={this.state.accountType}
                onChange={e => this.setState({ accountType: e.target.value })}
              >
                <option>Choose</option>
                <option>investor</option>
                <option>lawyer</option>
                <option>admin</option>
                <option>reviewer</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridGender">
              <Form.Label>Gender *</Form.Label>
              <Form.Control
                as="select"
                value={this.state.gender}
                onChange={e => this.setState({ gender: e.target.value })}
              >
                <option>Choose</option>
                <option>Female</option>
                <option>Male</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridNationality">
              <Form.Label>Nationality *</Form.Label>
              <Form.Control
                type="nationality"
                placeholder="Enter your nationality"
                value={this.state.nationality}
                onChange={e => this.setState({ nationality: e.target.value })}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email *</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password *</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
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
                placeholder="Enter the type of your ID"
                value={this.state.typeID}
                onChange={e => this.setState({ typeID: e.target.value })}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridNumberID">
              <Form.Label>Number of ID *</Form.Label>
              <Form.Control
                type="numberID"
                placeholder="Enter the number of your ID"
                numberID={this.state.nationality}
                onChange={e => this.setState({ numberID: e.target.value })}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridPhoneNumber">
              <Form.Label>Phone Number *</Form.Label>
              <Form.Control
                type="phoneNumber"
                placeholder="Enter your phone number"
                value={this.state.phoneNumber}
                onChange={e => this.setState({ phoneNumber: e.target.value })}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridFaxNumber">
              <Form.Label>Fax Number *</Form.Label>
              <Form.Control
                type="faxNumber"
                placeholder="Enter your fax number"
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
                placeholder="Enter your date of birth"
                value={this.state.dateOfBirth}
                onChange={e => this.setState({ dateOfBirth: e.target.value })}
              />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress">
            <Form.Label>Address *</Form.Label>
            <Form.Control
              placeholder="1234 Main St"
              value={this.state.address}
              onChange={e => this.setState({ address: e.target.value })}
            />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridInvestorType">
              <Form.Label>Investor Type</Form.Label>
              <Form.Control
                type="investorType"
                placeholder="Enter type of Investor"
                value={this.state.investorType}
                onChange={e => this.setState({ investorType: e.target.value })}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCapital">
              <Form.Label>Capital</Form.Label>
              <Form.Control
                type="capital"
                placeholder="Enter your Capital"
                value={this.state.capital}
                onChange={e => this.setState({ capital: e.target.value })}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCapitalCurrency">
              <Form.Label>Capital Currency</Form.Label>
              <Form.Control
                type="capitalCurrency"
                placeholder="Enter the currency of your capital"
                value={this.state.capitalCurrency}
                onChange={e =>
                  this.setState({ capitalCurrency: e.target.value })
                }
              />
            </Form.Group>
          </Form.Row>

          <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <div>{this.state.responseToPost}</div>
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
    );
  }
}

export default SignUp;
