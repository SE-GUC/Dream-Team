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
    companyNameEng: "",
    formID: "",
    inID: ""
  };
  board = async e => {
    // e.preventDefault();
    const response = await fetch(
      "/api/investor/updateForm/" + this.state.formID + "/" + this.state.inID,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          board: this.state.board
        })
      }
    );
    const body = await response.text();

    this.setState({ responseToPost: body });
  };
  companyNameEng = async e => {
    // e.preventDefault();
    const response = await fetch(
      "/api/investor/updateForm/" + this.state.formID + "/" + this.state.inID,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          companyNameEng: this.state.companyNameEng
        })
      }
    );
    const body = await response.text();

    this.setState({ responseToPost: body });
  };
  companyName = async e => {
    // var body5 = JSON.parse(this.state.formID);
    // var body6 = JSON.parse(this.state.inID);
    const response = await fetch(
      "/api/investor/updateForm/" + this.state.formID + "/" + this.state.inID,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          companyName: this.state.companyName
        })
      }
    );
    const body = await response.text();

    this.setState({ responseToPost: body });
  };
  render() {
    return (
      <div className="Home">
        <p>
          <strong>Investor Update Form:</strong>
        </p>
        Please insert investor ID:
        <input
          type="text"
          value={this.state.inID}
          onChange={e => this.setState({ inID: e.target.value })}
        />
        Please insert Form ID:
        <input
          type="text"
          value={this.state.formID}
          onChange={e => this.setState({ formID: e.target.value })}
        />
        <p>{this.state.inID}</p>
        <dev>
          companyName:
          <input
            type="text"
            value={this.state.companyName}
            onChange={e => this.setState({ companyName: e.target.value })}
          />
          <button
            type="submit"
            onClick={e => {
              this.companyName();
            }}
          >
            UPDATE company Name
          </button>
        </dev>
        <dev>
          companyNameEng:
          <input
            type="text"
            value={this.state.companyNameEng}
            onChange={e => this.setState({ companyNameEng: e.target.value })}
          />
          <button
            type="submit"
            onClick={e => {
              this.companyNameEng();
            }}
          >
            UPDATE company Name Eng
          </button>
        </dev>
        <dev>
          <p>{this.state.responseToPost}</p>
          board:
          <input
            type="text"
            value={this.state.board}
            onChange={e => this.setState({ board: e.target.value })}
          />
          <button
            type="submit"
            onClick={e => {
              this.board();
            }}
          >
            UPDATE
          </button>
        </dev>
        <p>{this.state.responseToPost}</p>
      </div>
    );
  }
}
export default UpdateTest;
