import React, { Component } from "react";
// import { Table } from "reactstrap";
class comRule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: []
    };
  }
  componentDidMount() {
    fetch("api/user/companyRules/")
      .then(res => res.json())
      .then(json => {
        this.setState({
          response: json.data
        });
      });
  }

  render() {
    return <p>{this.state.response}</p>;
  }
}
export default comRule;
