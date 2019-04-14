import React, { Component } from "react";
import "./updateInvForm.css";
import { Form, Button, Col } from "react-bootstrap";
import { Table } from "reactstrap";
import AuthHelperMethods from "../AuthHelperMethods";
import withAuth from "../withAuth";

class UpdateInvForm extends Component {
  Auth = new AuthHelperMethods();
  state = {
    companyName: "",
    companyNameEng: "",
    companyType: "",

    governorate: "",
    city: "",
    address: "",
    telephone: "",
    fax: "",
    currency: "",
    capital: "",
    entityType: "",
    // board: [],
    regulatedLaw: "",
    responseToPost: "",
    response: [],
    formID: "",
    lawyerComment: "",
    lawyerDecision: "",
    feesCalculation: "",
    reviwerComment: "",
    reviewerDecision: "",
    dateOfApproval: "",
    amountOfPayment: "",
    dateOfPayment: "",
    paymentId: "",
    formStatus: "",
    isLoaded: false
  };

  componentDidMount = async e => {
    // e.preventDefault();

    // var body50 =  JSON.parse(this.state.userID);
    const response1 = await this.Auth.fetch("/api/investor/pending", {
      method: "GET"
    }).catch(err => {
      alert(err);
    });

    const body1 = await response1.json();
    this.setState({ response: body1, isLoaded: true });

    await document
      .getElementById("myTable1")
      .addEventListener("click", async evt => {
        var btn = evt.target;
        console.log(btn.tagName);
        if (btn.tagName === "BUTTON") {
          var row = btn.parentNode.parentNode; //td than tr
          var cells = row.getElementsByTagName("td"); //cells
          console.log(cells[0].textContent, cells[1].textContent);
          await this.setState({
            formID: cells[0].textContent,
            companyName: cells[1].textContent,
            companyNameEng: cells[2].textContent,
            companyType: cells[3].textContent,

            governorate: cells[4].textContent,
            city: cells[5].textContent,
            address: cells[6].textContent,
            telephone: cells[7].textContent,
            fax: cells[8].textContent,
            currency: cells[9].textContent,
            capital: cells[10].textContent,
            entityType: cells[11].textContent,
            //   board: [],
            regulatedLaw: cells[12].textContent,
            lawyerComment: cells[15].textContent,
            lawyerDecision: cells[16].textContent,
            feesCalculation: cells[18].textContent,
            reviwerComment: cells[19].textContent,
            reviewerDecision: cells[20].textContent,
            dateOfApproval: cells[21].textContent,
            amountOfPayment: cells[22].textContent,
            dateOfPayment: cells[23].textContent,
            paymentId: cells[24].textContent,
            formStatus: cells[25].textContent
          });
        }
      });
  };

  handleUpdate = async e => {
    document.getElementById("myTable1").className = "hide";
    document.getElementById("for").className = "show";
  };

  handleSubmit = async e => {
    e.preventDefault();
    console.log(document.getElementById("myTable1"));
    // document.getElementById("myTable1").className = "show";
    // document.getElementById("for").className = "show";

    const response = await this.Auth.fetch(
      "api/investor/form" + this.state.formID.trim() + "/",
      {
        method: "PUT",
        body: JSON.stringify({
          companyName: this.state.companyName,
          //   accountType: this.state.accountType, gender: this.state.gender, nationality: this.state.nationality,
          companyNameEng: this.state.companyNameEng,
          companyType: this.state.companyType,
          headquarters: {
            governorate: this.state.governorate,
            city: this.state.city,
            address: this.state.address,
            telephone: this.state.telephone
          },
          financialInfo: {
            currency: this.state.currency,
            capital: this.state.capital
          }
          // entityType: this.state.entityType,
          // regulatedLaw: this.state.regulatedLaw,
          // lawyerComment: this.state.lawyerComment,
          // lawyerDecision: this.state.lawyerDecision,
          // feesCalculation: this.state.feesCalculation,
          // reviwerComment: this.state.reviwerComment,
          // reviewerDecision: this.state.reviewerDecision,
          // dateOfApproval: this.state.dateOfApproval,
          // amountOfPayment: this.state.amountOfPayment,
          // dateOfPayment: this.state.dateOfPayment,
          // paymentId: this.state.paymentId,
          // formStatus: this.state.formStatus
          // , dateoOfBirth: this.state.dateOfBirth, investorType: this.state.investorType, capital: this.state.capital, capitalCurrency: this.state.capitalCurrency
        })
      }
    ).catch(err => {
      this.setState({ responseToPost: err });
    });
    const body = await response.text();
    this.setState({ responseToPost: body });
    // this.props.history.replace("/");
    // this.props.history.replace("/updateUser");
  };

  render() {
    var { response, isLoaded } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="UpdateInvForm">
          <Table dark hover bordered id="myTable1" className="show">
            <thead>
              <tr>
                <th className="hide"> ID</th>
                <th> companyName </th>
                <th> companyNameEng </th>
                <th> companyType </th>
                <th> governorate </th>
                <th> city </th>
                <th> address </th>
                <th> telephone </th>
                <th> fax </th>
                <th> currency </th>
                <th> capital </th>
                <th> entityType </th>
                <th> regulatedLaw </th>
                <th> investor </th>
                <th> lawyer </th>
                <th> lawyerComment </th>
                <th> lawyerDecision </th>
                <th> reviewer </th>
                <th> feesCalculation </th>
                <th> reviwerComment </th>
                <th> reviewerDecision </th>
                <th> dateOfApproval </th>
                <th> amountOfPayment </th>
                <th> dateOfPayment </th>
                <th> paymentId </th>
                <th> formStatus </th>
                {/* <th> board </th> */}
                <th> update </th>
              </tr>
            </thead>
            <tbody>
              {response.data.map((x, key) => (
                <tr>
                  <td className="hide"> {(key = x._id)}</td>
                  <td>{x.companyName}</td>
                  <td>{x.companyNameEng}</td>
                  <td>{x.companyType}</td>
                  <td>
                    {x.headquarters != undefined
                      ? x.headquarters.governorate
                      : null}
                  </td>
                  <td>
                    {x.headquarters != undefined ? x.headquarters.city : null}
                  </td>
                  <td>
                    {x.headquarters != undefined
                      ? x.headquarters.address
                      : null}
                  </td>
                  <td>
                    {x.headquarters != undefined
                      ? x.headquarters.telephone
                      : null}
                  </td>
                  <td>
                    {x.headquarters != undefined ? x.headquarters.fax : null}
                  </td>
                  <td>
                    {x.financialInfo != undefined
                      ? x.financialInfo.currency
                      : null}
                  </td>
                  <td>
                    {x.financialInfo != undefined
                      ? x.financialInfo.capital
                      : null}
                  </td>
                  <td>{x.entityType}</td>
                  <td>{x.regulatedLaw}</td>
                  <td>{x.investor}</td>
                  <td>{x.lawyer}</td>
                  <td>{x.lawyerComment}</td>
                  <td>{x.lawyerDecision}</td>
                  <td>{x.reviewer}</td>
                  <td>{x.feesCalculation}</td>
                  <td>{x.reviwerComment}</td>
                  <td>{x.reviewerDecision}</td>
                  <td>{x.dateOfApproval}</td>
                  <td>{x.amountOfPayment}</td>
                  <td>{x.dateOfPayment}</td>
                  <td>{x.paymentId}</td>
                  <td>{x.formStatus}</td>
                  {/* <td>{x.board != undefined ? x.board : null}</td> */}
                  <td>
                    <Button onClick={this.handleUpdate}>update</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Form className="hide" id="for">
            <Form.Row>
              <Form.Group as={Col} controlId="formBasic">
                <Form.Label>companyName *</Form.Label>

                <Form.Control
                  type="name"
                  value={this.state.companyName}
                  onChange={e => this.setState({ companyName: e.target.value })}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridAccountType">
                <Form.Label>companyNameEng*</Form.Label>
                <Form.Control
                  value={this.state.companyNameEng}
                  onChange={e =>
                    this.setState({ companyNameEng: e.target.value })
                  }
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridGender">
                <Form.Label>companyType *</Form.Label>
                <Form.Control
                  value={this.state.companyType}
                  onChange={e => this.setState({ companyType: e.target.value })}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridNationality">
                <Form.Label>governorate *</Form.Label>
                <Form.Control
                  value={this.state.governorate}
                  onChange={e => this.setState({ governorate: e.target.value })}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>city *</Form.Label>
                <Form.Control
                  value={this.state.city}
                  onChange={e => this.setState({ city: e.target.value })}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>address *</Form.Label>
                <Form.Control
                  value={this.state.address}
                  onChange={e => this.setState({ address: e.target.value })}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridTypeID">
                <Form.Label>telephone *</Form.Label>
                <Form.Control
                  value={this.state.telephone}
                  onChange={e => this.setState({ telephone: e.target.value })}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridNumberID">
                <Form.Label>fax *</Form.Label>
                <Form.Control
                  value={this.state.fax}
                  onChange={e => this.setState({ fax: e.target.value })}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridPhoneNumber">
                <Form.Label>currency *</Form.Label>
                <Form.Control
                  value={this.state.currency}
                  onChange={e => this.setState({ currency: e.target.value })}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridFaxNumber">
                <Form.Label>capital*</Form.Label>
                <Form.Control
                  value={this.state.capital}
                  onChange={e => this.setState({ capital: e.target.value })}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridDateofBirth">
                <Form.Label>entityType *</Form.Label>
                <Form.Control
                  value={this.state.entityType}
                  onChange={e => this.setState({ entityType: e.target.value })}
                />
              </Form.Group>
            </Form.Row>
            <Form.Group controlId="formGridAddress">
              <Form.Label>regulatedLaw *</Form.Label>
              <Form.Control
                value={this.state.regulatedLaw}
                onChange={e => this.setState({ regulatedLaw: e.target.value })}
              />
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridInvestorType">
                <Form.Label>lawyerDecision</Form.Label>
                <Form.Control
                  value={this.state.lawyerDecision}
                  onChange={e =>
                    this.setState({ lawyerDecision: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCapital">
                <Form.Label>feesCalculation</Form.Label>
                <Form.Control
                  value={this.state.feesCalculation}
                  onChange={e =>
                    this.setState({ feesCalculation: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCapitalCurrency">
                <Form.Label>reviwerComment</Form.Label>
                <Form.Control
                  value={this.state.reviwerComment}
                  onChange={e =>
                    this.setState({ reviwerComment: e.target.value })
                  }
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridInvestorType">
                <Form.Label>reviewerDecision</Form.Label>
                <Form.Control
                  value={this.state.reviewerDecision}
                  onChange={e =>
                    this.setState({ reviewerDecision: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCapital">
                <Form.Label>dateOfApproval</Form.Label>
                <Form.Control
                  type="date"
                  value={this.state.dateOfApproval}
                  onChange={e =>
                    this.setState({ dateOfApproval: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCapitalCurrency">
                <Form.Label>amountOfPayment</Form.Label>
                <Form.Control
                  value={this.state.amountOfPayment}
                  onChange={e =>
                    this.setState({ amountOfPayment: e.target.value })
                  }
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridInvestorType">
                <Form.Label>dateOfPayment</Form.Label>
                <Form.Control
                  value={this.state.dateOfPayment}
                  onChange={e =>
                    this.setState({ dateOfPayment: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCapital">
                <Form.Label>paymentId</Form.Label>
                <Form.Control
                  value={this.state.paymentId}
                  onChange={e => this.setState({ paymentId: e.target.value })}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCapitalCurrency">
                <Form.Label>formStatus</Form.Label>
                <Form.Control
                  value={this.state.formStatus}
                  onChange={e => this.setState({ formStatus: e.target.value })}
                />
              </Form.Group>
            </Form.Row>

            <div>{this.state.responseToPost}</div>

            <Button type="submit" onClick={this.handleSubmit}>
              update{" "}
            </Button>

            <div>{this.state.responseToPost}</div>
          </Form>
        </div>
      );
    }
  }
}

export default UpdateInvForm;
