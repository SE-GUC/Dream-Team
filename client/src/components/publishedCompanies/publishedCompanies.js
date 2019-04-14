import React, { Component } from "react";
import "./publishedCompanies.css";
import Axios from "axios";
import { Table } from "reactstrap";
import AuthHelperMethods from "../AuthHelperMethods";
import withAuth from "../withAuth";
class publishedCompanies extends Component {
  Auth = new AuthHelperMethods();
  constructor(props) {
    super(props);
    this.state = { publishedCompanies: [], isLoaded: false };
  }
  // componentDidMount() {
  //   fetch("api/user/companies/publishedcompanies/")
  //     .then(res => res.json())
  //     .then(json => {
  //       this.setState({
  //         publishedCompanies: json,
  //         isLoaded: true
  //       });
  //     });
  // }
  componentDidMount() {
    this.Auth.fetch("api/externalPortal/companies/publishedcompanies/")
      .then(res => res.json())
      .then(json => {
        this.setState({
          publishedCompanies: json.data,
          isLoaded: true
        });
      });
  }

  render() {
    var { publishedCompanies, isLoaded } = this.state;
    if (!isLoaded) {
      return (
        <div>
          {/* <button onClick={y => this.componentDidMount()}>
            Search for publishedCompanies
          </button> */}
        </div>
      );
    } else {
      return (
        <div className="table">
          {/* <button onClick={y => this.componentDidMount()}>Search</button> */}
          <table>
            <thead>
              <tr>
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
              {publishedCompanies.map(x => (
                <tr>
                  <td>{x.companyName}</td>
                  <td>{x.companyNameEng}</td>
                  <td>{x.companyType}</td>
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
  //   .then(res => res.json())
  //   .then(json => {
  //     this.setState({
  //       isLoaded: true,
  //       response: json,
  //       id: this.state.id
  //     });
  //   });
}

export default publishedCompanies;
