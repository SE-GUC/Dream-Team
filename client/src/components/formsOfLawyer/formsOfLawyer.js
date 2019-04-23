import AuthHelperMethods from "../AuthHelperMethods";
import withAuth from "../withAuth";
import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import axios from "axios";
import "./formsOfLawyer.css";

class formsOfLawyer extends Component {
  Auth = new AuthHelperMethods();
  constructor(props) {
    super(props);
    this.state = {
      response: [],
      response2: [],
      isLoaded: false,
      isLoaded2: false,
      userID: ""
    };
  }
  mina = async e => {
    e.preventDefault();
    document.getElementById("medhat").className = "show";
    // document.getElementById("myTablee").className = "hide";
    console.log(document.getElementById("myTablee"));
    await document.getElementById("myTablee").addEventListener("click", evt => {
      var btn = evt.target;
      console.log(btn.tagName);
      if (btn.tagName === "BUTTON") {
        var row = btn.parentNode.parentNode; //td than tr
        var cells = row.getElementsByTagName("td"); //cells
        //    console.log(cells[0].textContent, cells[1].textContent);
        this.setState({
          userID: cells[0].textContent
        });
      }
    });
    const res = await this.Auth.fetch(
      "/api/admin/lawyer/" + this.state.userID + "/"
    )
      .then(res => res.json())
      .then(json => {
        console.log(json);
        this.setState({
          isLoaded2: true,
          response2: json
        });
      });
  };
  componentDidMount() {
    this.Auth.fetch("api/admin/lawyer")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          response: json
        });
      });
  }
  componentDidMount() {
    this.handleSubmit();
  }

  render() {
    var { response, isLoaded, response2 } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="formsOfLawyer">
          <Table id="myTablee" dark hover bordered>
            <thead>
              <tr>
                <th className="hide"> ID </th>
                <th> name </th>
                <th> email </th>
                <th> accountType </th>
                <th> gender </th>
                <th> nationality </th>
                <th> typeID </th>
                <th> numberID </th>
                <th> dateOfBirth </th>
                <th> address </th>
                <th> phoneNumber </th>
                <th> faxNumber </th>
                <th>accountStatus</th>
                <th>view forms</th>
              </tr>
            </thead>
            <tbody>
              {response.data.map(x => (
                <tr>
                  <td className="hide">{x._id}</td>
                  <td>{x.name}</td>
                  <td>{x.email}</td>
                  <td>{x.accountType}</td>
                  <td>{x.gender}</td>
                  <td>{x.nationality}</td>
                  <td>{x.typeID}</td>
                  <td>{x.numberID}</td>
                  <td>{x.dateOfBirth}</td>
                  <td>{x.address}</td>
                  <td>{x.phoneNumber}</td>
                  <td>{x.faxNumber}</td>
                  <td>{x.accountStatus ? "true" : "false"} </td>
                  <td>
                    <Button onClick={this.mina}>view forms</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Table dark hover bordered className="hide" id="medhat">
            <thead>
              <tr>
                <th> ID</th>
                <th> companyName </th>
                <th> companyNameEng </th>
                <th> companyType </th>
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
              </tr>
            </thead>
            <tbody>
              {response2.data == undefined
                ? null
                : response2.data.map(x => (
                    <tr>
                      <td> {x._id}</td>
                      <td>{x.companyName}</td>
                      <td>{x.companyNameEng}</td>
                      <td>{x.companyType}</td>
                      {/* <td>{x.headquarters}</td> */}
                      {/* <td>{x.city}</td>
                      <td>{x.address}</td>
                      <td>{x.telephone}</td>
                      <td>{x.fax}</td>
                      <td>{x.currency}</td>
                      <td>{x.capital}</td> */}
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
                      {/* <td>{x.board}</td> */}
                    </tr>
                  ))}
            </tbody>
          </Table>
        </div>
      );
    }
  }
}
export default withAuth(formsOfLawyer);
