import React, { Component } from "react";
import AuthHelperMethods from "../AuthHelperMethods";
import withAuth from "../withAuth";

class feesCalc extends Component {
  Auth = new AuthHelperMethods();
  constructor(props) {
    super(props);
    this.state = {
      response: [],
      isLoaded: false,
      id: ""
    };
  }
  handleSubmit() {
    console.log("hiiii");

    this.Auth.fetch("api/lawyer/feesCalculation/" + this.state.id, {
      method: "PUT"
    })
      .then(res => res.json())
      .then(json => {
        console.log(json);
        console.log(this.state);
        this.setState({
          isLoaded: true,
          response: json
        });
      });
  }

  render() {
    var { response, isLoaded } = this.state;
    if (!isLoaded) {
      return (
        <div>
          FormID:
          <input
            type="text"
            value={this.state.id}
            onChange={e => this.setState({ id: e.target.value })}
          />
          <button onClick={y => this.handleSubmit()}>Search</button>
        </div>
      );
    } else {
      return <div>Fees Calculated sucessfully!:)</div>;
    }
  }
}

export default withAuth(feesCalc);
// export default feesCalc;
