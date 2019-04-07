import React, { Component } from "react";

class UpdateTest extends Component {
  state = {
    governorate: "",
    city: "",
    address: "",
    telephone: "",
    fax: "",
    Currency: "",
    Capital: "",
    companyName: "",
    companyNameEng: ""
  };
  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch(
      "/api/investor/updateForm/:idform/:idInvestor",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        })
      }
    );
    const body = await response.text();

    this.setState({ responseToPost: body });
  };

  render() {
    return (
      <div className="Home">
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Investor Update Form:</strong>
          </p>
          governorate:
          <input
            type="text"
            value={this.state.governorate}
            onChange={e => this.setState({ governorate: e.target.value })}
          />
          city:
          <input
            type="text"
            value={this.state.city}
            onChange={e => this.setState({ city: e.target.value })}
          />
          address:
          <input
            type="text"
            value={this.state.address}
            onChange={e => this.setState({ address: e.target.value })}
          />
          telephone:
          <input
            type="text"
            value={this.state.telephone}
            onChange={e => this.setState({ telephone: e.target.value })}
          />
          fax:
          <input
            type="text"
            value={this.state.fax}
            onChange={e => this.setState({ fax: e.target.value })}
          />
          Currency:
          <input
            type="text"
            value={this.state.Currency}
            onChange={e => this.setState({ Currency: e.target.value })}
          />
          Capital:
          <input
            type="text"
            value={this.state.Capital}
            onChange={e => this.setState({ Capital: e.target.value })}
          />
          companyName:
          <input
            type="text"
            value={this.state.companyName}
            onChange={e => this.setState({ companyName: e.target.value })}
          />
          companyNameEng:
          <input
            type="text"
            value={this.state.companyNameEng}
            onChange={e => this.setState({ companyNameEng: e.target.value })}
          />
          <button type="submit">UPDATE</button>
        </form>
        <p>{this.state.responseToPost}</p>
      </div>
    );
  }
}
export default UpdateTest;
