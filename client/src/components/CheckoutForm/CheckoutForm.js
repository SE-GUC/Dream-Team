import React, { Component } from "react";
import AuthHelperMethods from "../AuthHelperMethods";
import withAuth from "../withAuth";
import {
  CardElement,
  injectStripe,
  Elements,
  StripeProvider
} from "react-stripe-elements";

import { Button, Col, Form } from "react-bootstrap";
// const stripe = require("stripe");

class CheckoutForm extends Component {
  Auth = new AuthHelperMethods();
  state = {
    name: "",
    description: "",
    currency: "",
    amount: ""
  };
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    let { token } = await this.props.stripe.createToken({
      name: this.state.name
    });
    const data = {
      source: token.id,
      description: this.state.description,
      currency: this.state.currency,
      amount: this.state.amount
    };
    console.log(token.id);
    console.log(this.state.description);
    console.log(this.state.currency);
    console.log(this.state.amount);

    let response = await this.Auth.fetch("api/investor/charge", {
      method: "POST",
      body: JSON.stringify(data)
    });
    if (response.ok) {
      console.log("Purchase Complete");
    }
  }

  render() {
    // console.log("hobba");
    // var stripe = Stripe("pk_test_pFFle6aNtp26YRAxuIy8wYMm00c5ELR0rn");

    return (
      <div className="Update">
        <Form>
          <Form.Row>
            <Form.Group controlId="formBasicName">
              <Form.Label> Name</Form.Label>
              <Form.Control
                type="text"
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
              />

              <Form.Label> Description</Form.Label>
              <Form.Control
                type="text"
                value={this.state.description}
                onChange={e => this.setState({ description: e.target.value })}
              />

              <Form.Label>Currency</Form.Label>
              <Form.Control
                type="text"
                value={this.state.currency}
                onChange={e => this.setState({ currency: e.target.value })}
              />

              <Form.Label> Amount</Form.Label>
              <Form.Control
                type="text"
                value={this.state.amount}
                onChange={e => this.setState({ amount: e.target.value })}
              />

              {/* <Button
                variant="primary"
                type="submit"
                onClick={e => {
                  this.handleSubmit(e);
                }}
              >
                UPDATE
              </Button>
              <p>{this.state.responseToPost}</p> */}
            </Form.Group>
          </Form.Row>
        </Form>

        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.submit}>Send</button>
      </div>
    );
  }
}

export default withAuth(injectStripe(CheckoutForm));
