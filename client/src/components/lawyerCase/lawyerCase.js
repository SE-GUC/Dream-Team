import React, { Component } from "react";
import "./lawyerCase.css";
import AuthHelperMethods from "../AuthHelperMethods";
import withAuth from "../withAuth";
class Case extends Component {
  Auth = new AuthHelperMethods();
  state = {
    responseToPost: ""
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await this.Auth.fetch("/api/lawyer/AR", {
      method: "GET"
      //   body: JSON.stringify({ _id:this.state.formID })
    });
    const body = await response.text();

    this.setState({ responseToPost: body });
  };

  render() {
    return (
      <div className="LawyerCase">
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Me as a lawyer I should get my decided forms</strong>
          </p>

          <button type="submit">search</button>
        </form>
        <p>{this.state.responseToPost}</p>
      </div>
    );
  }
}

export default withAuth(Case);
