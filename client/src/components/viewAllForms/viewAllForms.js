import React, { Component } from "react";
import { Table } from "reactstrap";
const axios = require("axios");
//As a reviewer, I should get all my forms and approve/reject and add comments on each form
//one specific ID
class viewRejectedForms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: [],
      isLoaded: false,
      update: true
    };
  }
  reject(x, y) {
    axios
      .put("http://localhost:5000/api/reviewer/reject/" + x + "/" + y, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      //   .then(response => {
      //     const body = response.text();

      //     this.setState({ responseToPost: body });
      //   })
      .catch(err => {
        console.log(err);
      });
  }
  accept(x, y) {
    axios
      .put("http://localhost:5000/api/reviewer/accept/" + x + "/" + y, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      //   .then(response => {
      //     const body = response.text();

      //     this.setState({ responseToPost: body });
      //   })
      .catch(err => {
        console.log(err);
      });
  }
  componentDidMount() {
    fetch("api/reviewer/pendingCase/5ca0a9f26a36eb47ec6db295")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          response: json
        });
      });
  }
  update(formId, investorId) {
    this.props.history.push("/update");
  }

  render() {
    var { response, isLoaded } = this.state;
    let x;

    if (!isLoaded) {
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
                  <td>
                    {
                      <button
                        className="btn btn-primary width-150"
                        onClick={e => {
                          this.accept(x._id, x.reviewer);
                        }}
                      >
                        Click to accept
                      </button>
                    }
                  </td>
                  <td>
                    {
                      <button
                        className="btn btn-primary width-150"
                        onClick={e => {
                          this.reject(x._id, x.reviewer);
                        }}
                      >
                        Click to reject
                      </button>
                    }
                  </td>
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

export default viewRejectedForms;
