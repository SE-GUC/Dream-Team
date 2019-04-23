import React, { Component } from "react";
import { Table } from "reactstrap";
import AuthHelperMethods from "../AuthHelperMethods";
import withAuth from "../withAuth";
//As a reviewer, I should get all my forms and approve/reject and add comments on each form
//one specific ID
class investorTrackRequest extends Component {
  Auth = new AuthHelperMethods();
  constructor(props) {
    super(props);
    this.state = {
      response: [],
      isLoaded: false,
      update: true
    };
  }

  componentDidMount() {
    this.Auth.fetch("api/investor/trackRequest")
      .then(response => response.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          response: json
        });
      })
      .catch(error => console.error(error));
  }

  render() {
    var { response, isLoaded } = this.state;
    let x;

    if (!isLoaded && response.data != undefined) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="formTable">
          <Table dark hover bordered>
            <thead>
              <tr>
                <th> address</th>
                <th> city </th>
                <th> governorate </th>
                <th> telephone </th>
                <th> Fax </th>
                <th> currency </th>
                <th> capital </th>
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
                <th> formType </th>
                <th> Reviewer accept </th>
                <th> Reviewer Reject </th>
              </tr>
            </thead>
            <tbody>
              {response.data.map((x, key) => (
                <tr>
                  <td> {x.headquarters.address}</td>
                  <td> {x.headquarters.city}</td>
                  <td> {x.headquarters.governorate}</td>
                  <td> {x.headquarters.telephone}</td>
                  <td> {x.headquarters.fax}</td>
                  <td> {x.financialInfo.currency}</td>
                  <td> {x.financialInfo.capital}</td>

                  <td> {x._id}</td>
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
                  <td>{x.formType}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div>{x}</div>
        </div>
      );
    }
  }
}

export default withAuth(investorTrackRequest);
