import React, { Component } from "react";
import AuthHelperMethods from "../AuthHelperMethods";
import withAuth from "../withAuth";

class LawyerFillForm extends Component {
  Auth = new AuthHelperMethods();
  state = {
    companyName: "",
    companyNameEng: "",
    companyType: "",
    headquarters: {
      governorate: "",
      city: "",
      address: "",
      telephone: "",
      fax: ""
    },
    financialInfo: {
      currency: "",
      capital: ""
    },
    entityType: "",
    board: [],
    regulatedLaw: "",
    inID: "",
    id: "",
    responseToPost: ""
  };
  fillForm = async e => {
    e.preventDefault();
    const response = await this.Auth.fetch("api/lawyer/createForm/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        companyName: this.state.companyName,
        companyNameEng: this.state.companyNameEng,
        companyType: this.state.companyType,
        headquarters: {
          governorate: this.state.governorate,
          city: this.state.city,
          address: this.state.address,
          telephone: this.state.telephone,
          fax: this.state.fax
        },
        financialInfo: {
          currency: this.state.currency,
          capital: this.state.capital
        },
        regulatedLaw: this.state.regulatedLaw,
        entityType: this.state.entityType
      })
    }).catch(err => {
      this.setState({ responseToPost: err });
    });
    const body1 = await response.text();
    this.setState({ responseToPost: body1 });
  };
  render() {
    return (
      <div className="LawyerFillForm">
        <div>
          <p>
            <strong>Lawyer fill form</strong>
          </p>
          Please insert lawyer:
          <input
            type="text"
            value={this.state.id}
            onChange={e => this.setState({ id: e.target.value })}
          />
        </div>
        <br />
        <br />
        <div>
          Please insert investor ID:
          <input
            type="text"
            value={this.state.inID}
            onChange={e => this.setState({ inID: e.target.value })}
          />
        </div>
        <br />
        <br />
        <div>
          companyName:
          <input
            type="text"
            value={this.state.companyName}
            onChange={e => this.setState({ companyName: e.target.value })}
          />
        </div>
        <br />
        <br />
        <div>
          companyNameEng:
          <input
            type="text"
            value={this.state.companyNameEng}
            onChange={e => this.setState({ companyNameEng: e.target.value })}
          />
        </div>
        <br />
        <br />
        <div>
          companyType:
          <input
            type="text"
            value={this.state.companyType}
            onChange={e => this.setState({ companyType: e.target.value })}
          />
        </div>
        <br />
        <br />
        <div>
          governorate:
          <input
            type="text"
            value={this.state.governorate}
            onChange={e => this.setState({ governorate: e.target.value })}
          />
        </div>
        <br />
        <br />
        <div>
          city:
          <input
            type="text"
            value={this.state.city}
            onChange={e => this.setState({ city: e.target.value })}
          />
        </div>
        <br />
        <br />
        <div>
          telephone:
          <input
            type="text"
            value={this.state.telephone}
            onChange={e => this.setState({ telephone: e.target.value })}
          />
        </div>
        <br />
        <br />
        <div>
          address:
          <input
            type="text"
            value={this.state.address}
            onChange={e => this.setState({ address: e.target.value })}
          />
        </div>
        <br />
        <br />
        <div>
          fax:
          <input
            type="text"
            value={this.state.fax}
            onChange={e => this.setState({ fax: e.target.value })}
          />
        </div>
        <br />
        <br />
        <div>
          currency:
          <input
            type="text"
            value={this.state.currency}
            onChange={e => this.setState({ currency: e.target.value })}
          />
        </div>
        <br />
        <br />
        <div>
          capital:
          <input
            type="text"
            value={this.state.capital}
            onChange={e => this.setState({ capital: e.target.value })}
          />
        </div>
        <br />
        <br />
        <div>
          entityType:
          <input
            type="text"
            value={this.state.entityType}
            onChange={e => this.setState({ entityType: e.target.value })}
          />
        </div>
        <br />
        <br />
        <div>
          regulatedLaw:
          <input
            type="text"
            value={this.state.regulatedLaw}
            onChange={e => this.setState({ regulatedLaw: e.target.value })}
          />
        </div>
        <br />
        <br />
        <div>
          <button type="submit" onClick={this.fillForm}>
            submit
          </button>
        </div>
        <p>{this.state.responseToPost}</p>
      </div>
    );
  }
}
export default withAuth(LawyerFillForm);
