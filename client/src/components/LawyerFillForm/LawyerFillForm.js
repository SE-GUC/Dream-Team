import React, { Component } from "react";
import { Button } from "react-bootstrap";
class LawyerFillForm extends Component {
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
    const response = await fetch(
      "api/lawyer/" + this.state.id + "/" + this.state.inID,
      {
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
          entityType: this.state.entityType,
      
        })
      }
    ).catch(err => {
      this.setState({ responseToPost: err });
    });
    const body1 = await response.text();
    this.setState({ responseToPost: body1 });
  };
  render() {
    return (
      <div className="LawyerFillForm">
        <dev>
          <p>
            <strong>Lawyer fill form</strong>
          </p>
          Please insert lawyer:
          <input
            type="text"
            value={this.state.id}
            onChange={e => this.setState({ id: e.target.value })}
          />
        </dev>
        <br />
        <br />
        <dev>
          Please insert investor ID:
          <input
            type="text"
            value={this.state.inID}
            onChange={e => this.setState({ inID: e.target.value })}
          />
        </dev>
        <br />
        <br />
        <dev>
          companyName:
          <input
            type="text"
            value={this.state.companyName}
            onChange={e => this.setState({ companyName: e.target.value })}
          />
        </dev>
        <br />
        <br />
        <dev>
          companyNameEng:
          <input
            type="text"
            value={this.state.companyNameEng}
            onChange={e => this.setState({ companyNameEng: e.target.value })}
          />
        </dev>
        <br />
        <br />
        <dev>
          companyType:
          <input
            type="text"
            value={this.state.companyType}
            onChange={e => this.setState({ companyType: e.target.value })}
          />
        </dev>
        <br />
        <br />
        <dev>
          governorate:
          <input
            type="text"
            value={this.state.governorate}
            onChange={e => this.setState({ governorate: e.target.value })}
          />
        </dev>
        <br />
        <br />
        <dev>
          city:
          <input
            type="text"
            value={this.state.city}
            onChange={e => this.setState({ city: e.target.value })}
          />
        </dev>
        <br />
        <br />
        <dev>
          telephone:
          <input
            type="text"
            value={this.state.telephone}
            onChange={e => this.setState({ telephone: e.target.value })}
          />
        </dev>
        <br />
        <br />
        <dev>
          address:
          <input
            type="text"
            value={this.state.address}
            onChange={e => this.setState({ address: e.target.value })}
          />
        </dev>
        <br />
        <br />
        <dev>
          fax:
          <input
            type="text"
            value={this.state.fax}
            onChange={e => this.setState({ fax: e.target.value })}
          />
        </dev>
        <br />
        <br />
        <dev>
          currency:
          <input
            type="text"
            value={this.state.currency}
            onChange={e => this.setState({ currency: e.target.value })}
          />
        </dev>
        <br />
        <br />
        <dev>
          capital:
          <input
            type="text"
            value={this.state.capital}
            onChange={e => this.setState({ capital: e.target.value })}
          />
        </dev>
        <br />
        <br />
        <dev>
          entityType:
          <input
            type="text"
            value={this.state.entityType}
            onChange={e => this.setState({ entityType: e.target.value })}
          />
        </dev>
        <br />
        <br />
        <dev>
          regulatedLaw:
          <input
            type="text"
            value={this.state.regulatedLaw}
            onChange={e => this.setState({ regulatedLaw: e.target.value })}
          />
        </dev>
        <br />
        <br />
        <dev>
          <button type="submit" onClick={this.fillForm}>
            submit
          </button>
        </dev>
        <p>{this.state.responseToPost}</p>
      </div>
    );
  }
}
export default LawyerFillForm;