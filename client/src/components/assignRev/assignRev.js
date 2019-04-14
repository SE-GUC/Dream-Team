import React, { Component } from "react";
import "./assignRev.css";
import { Table } from "reactstrap";
import { Button } from "react-bootstrap";
import AuthHelperMethods from "../AuthHelperMethods";
import withAuth from "../withAuth";

class assignRev extends Component {
  Auth = new AuthHelperMethods();
  state = {
    response: [],
    formID: "",
    responseToPost: "",
    isLoaded: false
  };
  componentDidMount() {
    this.Auth.fetch("api/reviewer/pendingCase")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          response: json
        });
      });
  }

  handleSubmit = async e => {
    e.preventDefault();

    await document.getElementById("myTable").addEventListener("click", evt => {
      var btn = evt.target;
      console.log(btn.tagName);
      if (btn.tagName === "BUTTON") {
        var row = btn.parentNode.parentNode; //td than tr
        var cells = row.getElementsByTagName("td"); //cells
        console.log(cells[0].textContent, cells[1].textContent);
        this.setState({ formID: cells[0].textContent });
      }
    });

    const response = await this.Auth.fetch(
      "/api/reviewer/assign/" + this.state.formID.trim(),
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        }
      }
    ).catch(err => {
      alert(JSON.stringify(err));
    });
    const body = await response.text();
    if (body.charAt(2) == "m") {
      this.setState({ responseToPost: body });
    } else {
      this.setState({
        responseToPost: "The form or reviewer IDs you entered is incorrect"
      });
    }
  };

  render() {
    var { response, isLoaded } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="AssignRev">
          <Table dark hover bordered id="myTable">
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
                <th> Assign me </th>
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
                    <Button type="submit" onClick={this.handleSubmit}>
                      assign me
                    </Button>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      );
    }
  }
}

export default withAuth(assignRev);
