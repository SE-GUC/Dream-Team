import React, { Component } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "./CheckoutForm";

class App extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_pFFle6aNtp26YRAxuIy8wYMm00c5ELR0rn">
        <div className="example">
          <h1>Checkout</h1>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default App;
