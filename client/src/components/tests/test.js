import React, { Component } from "react";
const axios = require("axios");
//investor Update Form
class UpdateTest extends Component {
  state = {
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
    companyName: "",
    companyNameEng: "",
    formID: "",
    inID: ""
  };
  governorate(e) {
    e.preventDefault();
    axios
      .put(
        "http://localhost:5000/api/investor/updateForm/" +
          this.state.formID +
          "/" +
          this.state.inID,
        JSON.stringify({
          headquarters: {
            governorate: this.state.governorate
          }
        }),
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      .then(response => {
        const body = response.text();

        this.setState({ responseToPost: body });
      })
      .catch(err => {
        console.log(err);
      });
  }
  city(e) {
    e.preventDefault();
    axios
      .put(
        "http://localhost:5000/api/investor/updateForm/" +
          this.state.formID +
          "/" +
          this.state.inID,
        JSON.stringify({
          headquarters: {
            city: this.state.city
          }
        }),
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      .then(response => {
        const body = response.text();

        this.setState({ responseToPost: body });
      })
      .catch(err => {
        console.log(err);
      });
  }
  address(e) {
    e.preventDefault();
    axios
      .put(
        "http://localhost:5000/api/investor/updateForm/" +
          this.state.formID +
          "/" +
          this.state.inID,
        JSON.stringify({
          headquarters: {
            address: this.state.address
          }
        }),
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      .then(response => {
        const body = response.text();

        this.setState({ responseToPost: body });
      })
      .catch(err => {
        console.log(err);
      });
  }
  telephone(e) {
    e.preventDefault();
    axios
      .put(
        "http://localhost:5000/api/investor/updateForm/" +
          this.state.formID +
          "/" +
          this.state.inID,
        JSON.stringify({
          headquarters: {
            telephone: this.state.telephone
          }
        }),
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      .then(response => {
        const body = response.text();

        this.setState({ responseToPost: body });
      })
      .catch(err => {
        console.log(err);
      });
  }
  fax(e) {
    e.preventDefault();
    axios
      .put(
        "http://localhost:5000/api/investor/updateForm/" +
          this.state.formID +
          "/" +
          this.state.inID,
        JSON.stringify({
          headquarters: {
            fax: this.state.fax
          }
        }),
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      .then(response => {
        const body = response.text();

        this.setState({ responseToPost: body });
      })
      .catch(err => {
        console.log(err);
      });
  }
  Currency(e) {
    e.preventDefault();
    axios
      .put(
        "http://localhost:5000/api/investor/updateForm/" +
          this.state.formID +
          "/" +
          this.state.inID,
        JSON.stringify({
          financialInfo: {
            currency: this.state.currency
          }
        }),
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      .then(response => {
        const body = response.text();

        this.setState({ responseToPost: body });
      })
      .catch(err => {
        console.log(err);
      });
  }
  capital(e) {
    e.preventDefault();
    axios
      .put(
        "http://localhost:5000/api/investor/updateForm/" +
          this.state.formID +
          "/" +
          this.state.inID,
        JSON.stringify({
          financialInfo: {
            capital: this.state.capital
          }
        }),
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      .then(response => {
        const body = response.text();

        this.setState({ responseToPost: body });
      })
      .catch(err => {
        console.log(err);
      });
  }

  companyName(e) {
    e.preventDefault();
    axios
      .put(
        "http://localhost:5000/api/investor/updateForm/" +
          this.state.formID +
          "/" +
          this.state.inID,
        JSON.stringify({
          companyName: this.state.companyName
        }),
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      .then(response => {
        const body = response.text();

        this.setState({ responseToPost: body });
      })
      .catch(err => {
        console.log(err);
      });
  }
  companyNameEng(e) {
    e.preventDefault();
    axios
      .put(
        "http://localhost:5000/api/investor/updateForm/" +
          this.state.formID +
          "/" +
          this.state.inID,
        JSON.stringify({
          companyNameEng: this.state.companyNameEng
        }),
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      .then(response => {
        const body = response.text();

        this.setState({ responseToPost: body });
      })
      .catch(err => {
        console.log(err);
      });
  }
  board(e) {
    e.preventDefault();
    axios
      .put(
        "http://localhost:5000/api/investor/updateForm/" +
          this.state.formID +
          "/" +
          this.state.inID,
        JSON.stringify({
          board: this.state.board
        }),
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      .then(response => {
        const body = response.text();

        this.setState({ responseToPost: body });
      })
      .catch(err => {
        console.log(err);
      });
  }

  // companyName = async e => {
  //   // var body5 = JSON.parse(this.state.formID);
  //   // var body6 = JSON.parse(this.state.inID);
  //   const response = await fetch(
  //     "/api/investor/updateForm/" + this.state.formID + "/" + this.state.inID,
  //     {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify({
  //         companyName: this.state.companyName
  //       })
  //     }
  //   );
  //   const body = await response.text();

  //   this.setState({ responseToPost: body });
  // };

  render() {
    return (
      <div className="Home">
        <p>
          <strong>Investor Update Form:</strong>
        </p>
        Please insert Form ID:
        <input
          type="text"
          value={this.state.formID}
          onChange={e => this.setState({ formID: e.target.value })}
        />
        <p />
        Please insert investor ID:
        <input
          type="text"
          value={this.state.inID}
          onChange={e => this.setState({ inID: e.target.value })}
        />
        <p />
        <dev>
          <p>{this.state.responseToPost}</p>
          companyName:
          <input
            type="text"
            value={this.state.companyName}
            onChange={e => this.setState({ companyName: e.target.value })}
          />
          <button
            type="submit"
            onClick={e => {
              this.companyName(e);
            }}
          >
            UPDATE company Name
          </button>
        </dev>
        <p> </p>
        <dev>
          <p>{this.state.responseToPost}</p>
          companyNameEng:
          <input
            type="text"
            value={this.state.companyNameEng}
            onChange={e => this.setState({ companyNameEng: e.target.value })}
          />
          <button
            type="submit"
            onClick={e => {
              this.companyNameEng(e);
            }}
          >
            UPDATE company Name in English
          </button>
        </dev>
        <p />
        Headquarters
        <dev>
          <p>{this.state.responseToPost}</p>
          governorate:
          <input
            type="text"
            value={this.state.governorate}
            onChange={e => this.setState({ governorate: e.target.value })}
          />
          <button
            type="submit"
            onClick={e => {
              this.governorate(e);
            }}
          >
            UPDATE governorate
          </button>
        </dev>
        <p>{this.state.responseToPost}</p>
        <dev>
          City:
          <input
            type="text"
            value={this.state.city}
            onChange={e => this.setState({ city: e.target.value })}
          />
          <button
            type="submit"
            onClick={e => {
              this.city(e);
            }}
          >
            UPDATE City
          </button>
        </dev>
        <p>{this.state.responseToPost}</p>
        <dev>
          <p>{this.state.responseToPost}</p>
          address:
          <input
            type="text"
            value={this.state.address}
            onChange={e => this.setState({ address: e.target.value })}
          />
          <button
            type="submit"
            onClick={e => {
              this.address(e);
            }}
          >
            UPDATE address
          </button>
        </dev>
        <p> </p>
        <dev>
          <p>{this.state.responseToPost}</p>
          telephone:
          <input
            type="text"
            value={this.state.telephone}
            onChange={e => this.setState({ telephone: e.target.value })}
          />
          <button
            type="submit"
            onClick={e => {
              this.telephone(e);
            }}
          >
            UPDATE telephone
          </button>
        </dev>
        <dev>
          <p>{this.state.responseToPost}</p>
          Fax:
          <input
            type="text"
            value={this.state.fax}
            onChange={e => this.setState({ fax: e.target.value })}
          />
          <button
            type="submit"
            onClick={e => {
              this.fax(e);
            }}
          >
            UPDATE fax
          </button>
        </dev>
        <dev>
          <p />
          financialInfo:
          <p>{this.state.responseToPost}</p>
          Currency:
          <input
            type="text"
            value={this.state.currency}
            onChange={e => this.setState({ currency: e.target.value })}
          />
          <button
            type="submit"
            onClick={e => {
              this.Currency(e);
            }}
          >
            UPDATE Currency
          </button>
        </dev>
        <p> </p>
        <dev>
          <p>{this.state.responseToPost}</p>
          Capital:
          <input
            type="text"
            value={this.state.capital}
            onChange={e => this.setState({ capital: e.target.value })}
          />
          <button
            type="submit"
            onClick={e => {
              this.Capital(e);
            }}
          >
            UPDATE Capital
          </button>
        </dev>
        <p> </p>
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
              this.board(e);
            }}
          >
            UPDATE Board
          </button>
        </dev>
      </div>
    );
  }
}
export default UpdateTest;