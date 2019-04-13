import React, { Component } from "react";
import "./assignLaw.css";
import { Table } from "reactstrap";
import { Button } from "react-bootstrap";

class assignLaw extends Component {
  state = {
    response: [],
    formID: "",
    responseToPost: "",
    isLoaded: false
  };
  componentDidMount() {
    fetch("api/internalPortal/unassignedForms/lawyer")
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

    const response = await fetch(
      "/api/internalPortal/lawyer/assign/" +
        this.state.formID.trim() +
        "/5ca0c88e6a36eb47ec6db2a5",
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
        <div className="formTable">
          <Table dark hover bordered id="myTable">
            <thead>
              <tr>
                <th className="hide"> ID</th>
                <th> companyName </th>
                <th> companyNameEng </th>
                <th> companyType </th>
                {/* <th> governorate  </th> */}
                {/* <th> city </th>
            <th> address </th>
            <th> telephone </th>
            <th> fax </th>
            <th> currency </th>
            <th> capital </th> */}
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
                <th> Assign me </th>
                {/* <th> board </th> */}
              </tr>
            </thead>
            <tbody>
              {response.data.map((x, key) => (
                <tr>
                  <td className="hide"> {(key = x._id)}</td>
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
                  <td>
                    <Button type="submit" onClick={this.handleSubmit}>
                      assign me
                    </Button>{" "}
                  </td>
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

export default assignLaw;
