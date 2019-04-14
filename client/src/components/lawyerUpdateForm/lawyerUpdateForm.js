// import React, { Component } from "react";

// const axios = require("axios");
// //investor Update Form
// class UpdateTest extends Component {
//   state = {
//     headquarters: {
//       governorate: "",
//       city: "",
//       address: "",
//       telephone: "",
//       fax: ""
//     },

//     financialInfo: {
//       Currency: "",
//       Capital: ""
//     },
//     companyName: "",
//     companyNameEng: "",
//     formID: "",
//     lawID: ""
//   };
//   governorate(e) {
//     e.preventDefault();
//     axios
//       .put(
//         "http://localhost:5000/api/lawyer/updateForm/" +
//           this.state.formID +
//           "/" +
//           this.state.lawID,
//         JSON.stringify({
//           headquarters: {
//             governorate: this.state.governorate
//           }
//         }),
//         {
//           headers: {
//             "Content-Type": "application/json"
//           }
//         }
//       )
//       .then(response => {
//         const body = response.text();

//         this.setState({ responseToPost: body });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }
//   city(e) {
//     e.preventDefault();
//     axios
//       .put(
//         "http://localhost:5000/api/lawyer/updateForm/" +
//           this.state.formID +
//           "/" +
//           this.state.lawID,
//         JSON.stringify({
//           headquarters: {
//             city: this.state.city
//           }
//         }),
//         {
//           headers: {
//             "Content-Type": "application/json"
//           }
//         }
//       )
//       .then(response => {
//         const body = response.text();

//         this.setState({ responseToPost: body });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }
//   address(e) {
//     e.preventDefault();
//     axios
//       .put(
//         "http://localhost:5000/api/lawyer/updateForm/" +
//           this.state.formID +
//           "/" +
//           this.state.lawID,
//         JSON.stringify({
//           headquarters: {
//             address: this.state.address
//           }
//         }),
//         {
//           headers: {
//             "Content-Type": "application/json"
//           }
//         }
//       )
//       .then(response => {
//         const body = response.text();

//         this.setState({ responseToPost: body });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }
//   telephone(e) {
//     e.preventDefault();
//     axios
//       .put(
//         "http://localhost:5000/api/lawyer/updateForm/" +
//           this.state.formID +
//           "/" +
//           this.state.lawID,
//         JSON.stringify({
//           headquarters: {
//             telephone: this.state.telephone
//           }
//         }),
//         {
//           headers: {
//             "Content-Type": "application/json"
//           }
//         }
//       )
//       .then(response => {
//         const body = response.text();

//         this.setState({ responseToPost: body });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }
//   fax(e) {
//     e.preventDefault();
//     axios
//       .put(
//         "http://localhost:5000/api/lawyer/updateForm/" +
//           this.state.formID +
//           "/" +
//           this.state.lawID,
//         JSON.stringify({
//           headquarters: {
//             fax: this.state.fax
//           }
//         }),
//         {
//           headers: {
//             "Content-Type": "application/json"
//           }
//         }
//       )
//       .then(response => {
//         const body = response.text();

//         this.setState({ responseToPost: body });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }
//   Currency(e) {
//     e.preventDefault();
//     axios
//       .put(
//         "http://localhost:5000/api/lawyer/updateForm/" +
//           this.state.formID +
//           "/" +
//           this.state.lawID,
//         JSON.stringify({
//           financialInfo: {
//             Currency: this.state.Currency
//           }
//         }),
//         {
//           headers: {
//             "Content-Type": "application/json"
//           }
//         }
//       )
//       .then(response => {
//         const body = response.text();

//         this.setState({ responseToPost: body });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }
//   Capital(e) {
//     e.preventDefault();
//     axios
//       .put(
//         "http://localhost:5000/api/lawyer/updateForm/" +
//           this.state.formID +
//           "/" +
//           this.state.lawID,
//         JSON.stringify({
//           financialInfo: {
//             Capital: this.state.Capital
//           }
//         }),
//         {
//           headers: {
//             "Content-Type": "application/json"
//           }
//         }
//       )
//       .then(response => {
//         const body = response.text();

//         this.setState({ responseToPost: body });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }

//   companyName(e) {
//     e.preventDefault();
//     axios
//       .put(
//         "http://localhost:5000/api/lawyer/updateForm/" +
//           this.state.formID +
//           "/" +
//           this.state.lawID,
//         JSON.stringify({
//           companyName: this.state.companyName
//         }),
//         {
//           headers: {
//             "Content-Type": "application/json"
//           }
//         }
//       )
//       .then(response => {
//         const body = response.text();

//         this.setState({ responseToPost: body });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }
//   // {this.props.formId},{this.props.lawID}
//   companyNameEng(e) {
//     e.preventDefault();
//     axios
//       .put(
//         "http://localhost:5000/api/lawyer/updateForm/" +
//           this.props.formId +
//           "/" +
//           this.props.lawID,
//         JSON.stringify({
//           companyNameEng: this.state.companyNameEng
//         }),
//         {
//           headers: {
//             "Content-Type": "application/json"
//           }
//         }
//       )
//       .then(response => {
//         const body = response.text();

//         this.setState({ responseToPost: body });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }
//   board(e) {
//     e.preventDefault();
//     axios
// .put(
//   "http://localhost:5000/api/lawyer/updateForm/" +
//     this.state.formID +
//     "/" +
//     this.state.lawID,
//         JSON.stringify({
//           board: this.state.board
//         }),
//         {
//           headers: {
//             "Content-Type": "application/json"
//           }
//         }
//       )
//       .then(response => {
//         const body = response.text();

//         this.setState({ responseToPost: body });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }

//   render() {
//     return (
//       <div className="Home">
//         <p>
//           <strong>Investor Update Form:</strong>
//         </p>
//         {/* Please insert Form ID:
//         <input
//           type="text"
//           value={this.props.formId}
//           onChange={e => this.setState({ formID: e.target.value })}
//         />
//         Please Lawyer ID:
//         <input
//           type="text"
//           value={this.props.lawID}
//           onChange={e => this.setState({ lawID: e.target.value })}
//         /> */}
//         <dev>
//           <p>{this.state.responseToPost}</p>
//           companyName:
//           <input
//             type="text"
//             value={this.state.companyName}
//             onChange={e => this.setState({ companyName: e.target.value })}
//           />
//           <button
//             type="submit"
//             onClick={e => {
//               this.companyName(e);
//             }}
//           >
//             UPDATE company Name
//           </button>
//         </dev>
//         <p> </p>
//         <dev>
//           <p>{this.state.responseToPost}</p>
//           address:
//           <input
//             type="text"
//             value={this.state.address}
//             onChange={e => this.setState({ address: e.target.value })}
//           />
//           <button
//             type="submit"
//             onClick={e => {
//               this.address(e);
//             }}
//           >
//             UPDATE address
//           </button>
//         </dev>
//         <p> </p>
//         <dev>
//           <p>{this.state.responseToPost}</p>
//           governorate:
//           <input
//             type="text"
//             value={this.state.governorate}
//             onChange={e => this.setState({ governorate: e.target.value })}
//           />
//           <button
//             type="submit"
//             onClick={e => {
//               this.governorate(e);
//             }}
//           >
//             UPDATE governorate
//           </button>
//         </dev>
//         <p> </p>
//         <dev>
//           <p>{this.state.responseToPost}</p>
//           Currency:
//           <input
//             type="text"
//             value={this.state.Currency}
//             onChange={e => this.setState({ Currency: e.target.value })}
//           />
//           <button
//             type="submit"
//             onClick={e => {
//               this.Currency(e);
//             }}
//           >
//             UPDATE Currency
//           </button>
//         </dev>
//         <p> </p>
//         <dev>
//           <p>{this.state.responseToPost}</p>
//           Capital:
//           <input
//             type="text"
//             value={this.state.Capital}
//             onChange={e => this.setState({ Capital: e.target.value })}
//           />
//           <button
//             type="submit"
//             onClick={e => {
//               this.Capital(e);
//             }}
//           >
//             UPDATE Capital
//           </button>
//         </dev>
//         <p> </p>
//         <dev>
//           <p>{this.state.responseToPost}</p>
//           companyNameEng:
//           <input
//             type="text"
//             value={this.state.companyNameEng}
//             onChange={e => this.setState({ companyNameEng: e.target.value })}
//           />
//           <button
//             type="submit"
//             onClick={e => {
//               this.companyNameEng(e);
//             }}
//           >
//             UPDATE company Name Eng
//           </button>
//         </dev>
//         <dev>
//           <p>{this.state.responseToPost}</p>
//           board:
//           <input
//             type="text"
//             value={this.state.board}
//             onChange={e => this.setState({ board: e.target.value })}
//           />
//           <button
//             type="submit"
//             onClick={e => {
//               this.board(e);
//             }}
//           >
//             UPDATE
//           </button>
//         </dev>
//         <p>{this.state.responseToPost}</p>
//         <dev>
//           City:
//           <input
//             type="text"
//             value={this.state.city}
//             onChange={e => this.setState({ city: e.target.value })}
//           />
//           <button
//             type="submit"
//             onClick={e => {
//               this.city(e);
//             }}
//           >
//             UPDATE
//           </button>
//         </dev>
//         <p>{this.state.responseToPost}</p>
//       </div>
//     );
//   }
// }
// export default UpdateTest;
import React, { Component } from "react";
import { Form, Button, Col } from "react-bootstrap";
import Popup from "reactjs-popup";

const axios = require("axios");
//investor Update Form
class LawyerFinal extends Component {
  state = {
    governorate: this.props.governorate,
    city: this.props.city,
    address: this.props.address,
    telephone: this.props.telephone,
    fax: this.props.fax,

    currency: this.props.currency,
    capital: this.props.capital,

    companyName: this.props.companyName,
    companyNameEng: this.props.companyNameEng,
    formID: this.props.formId,

    lawyerId: this.props.lawyerId
  };
  updateAll = async e => {
    e.preventDefault();
    const response = await fetch("api/lawyer/form/" + this.state.formID, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        companyName: this.state.companyName,
        companyNameEng: this.state.companyNameEng,
        financialInfo: {
          currency: this.state.currency,
          capital: this.state.capital
        },
        headquarters: {
          city: this.state.city,
          governorate: this.state.governorate,
          address: this.state.address,
          telephone: this.state.telephone,
          fax: this.state.fax
        },
        board: this.state.board
      })
    }).catch(err => {
      this.state({ responseToPost: err });
    });
    const body = await response.text();
    this.setState({ responseToPost: body });
  };

  // updateAll(e) {
  //   e.preventDefault();
  //   axios
  //     .put(
  //       "http://localhost:5000/api/lawyer/updateForm/" +
  //         this.state.formID +
  //         "/" +
  //         this.state.lawyerId,
  //       JSON.stringify({
  //         companyName: this.state.companyName,
  //         companyNameEng: this.state.companyNameEng,
  //         financialInfo: {
  //           currency: this.state.currency,
  //           capital: this.state.capital
  //         },
  //         headquarters: {
  //           city: this.state.city,
  //           governorate: this.state.governorate,
  //           address: this.state.address,
  //           telephone: this.state.telephone,
  //           fax: this.state.fax
  //         },
  //         board: this.state.board
  //       }),
  //       {
  //         headers: {
  //           "Content-Type": "application/json"
  //         }
  //       }
  //     )
  //     .then(response => {
  //       const body = response.text();

  //       this.setState({ responseToPost: body });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

  render() {
    return (
      <div className="Update">
        <Form onSubmit={this.handleSubmit}>
          <Form.Row>
            <Form.Group controlId="formBasicName">
              <Form.Label> * Company Name *</Form.Label>
              <Form.Control
                type="text"
                value={this.state.companyName}
                onChange={e => this.setState({ companyName: e.target.value })}
              />

              <Form.Label> *Company Name English *</Form.Label>
              <Form.Control
                type="text"
                value={this.state.companyNameEng}
                onChange={e =>
                  this.setState({ companyNameEng: e.target.value })
                }
              />

              <Form.Label> *Governorate *</Form.Label>
              <Form.Control
                type="text"
                value={this.state.governorate}
                onChange={e => this.setState({ governorate: e.target.value })}
              />

              <Form.Label> City *</Form.Label>
              <Form.Control
                type="text"
                value={this.state.city}
                onChange={e => this.setState({ city: e.target.value })}
              />

              <Form.Label> *Address *</Form.Label>
              <Form.Control
                type="text"
                value={this.state.address}
                onChange={e => this.setState({ address: e.target.value })}
              />

              <Form.Label> *Telephone *</Form.Label>
              <Form.Control
                type="text"
                value={this.state.telephone}
                onChange={e => this.setState({ telephone: e.target.value })}
              />

              <Form.Label> *Fax *</Form.Label>
              <Form.Control
                type="text"
                value={this.state.fax}
                onChange={e => this.setState({ fax: e.target.value })}
              />

              <Form.Label> *Currency *</Form.Label>
              <Form.Control
                type="text"
                value={this.state.currency}
                onChange={e => this.setState({ currency: e.target.value })}
              />

              <Form.Label> *Capital *</Form.Label>
              <Form.Control
                type="text"
                value={this.state.capital}
                onChange={e => this.setState({ capital: e.target.value })}
              />

              <Form.Label> *Board *</Form.Label>
              <Form.Control
                type="text"
                value={this.state.board}
                onChange={e => this.setState({ board: e.target.value })}
              />
              <p>{this.state.responseToPost}</p>

              <Button
                variant="primary"
                type="submit"
                onClick={e => {
                  this.updateAll(e);
                }}
              >
                UPDATE
              </Button>
            </Form.Group>
          </Form.Row>
        </Form>
      </div>
    );
  }
}
export default LawyerFinal;
