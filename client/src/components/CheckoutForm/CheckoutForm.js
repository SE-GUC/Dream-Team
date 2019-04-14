import React, { Component } from "react";
import {
  CardElement,
  injectStripe,
  Elements,
  StripeProvider
} from "react-stripe-elements";
// const stripe = require("stripe");

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    let { token } = await this.props.stripe.createToken({ name: "text box" });
    const data = {
      source: token.id,
      decsribtion: "hoba",
      currency: "hoba",
      amount: 9999
    };
    let response = await fetch("api/investor/charge", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.submit}>Send</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
