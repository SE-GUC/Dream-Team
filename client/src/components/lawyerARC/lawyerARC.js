import React, { Component } from "react";
import { Table } from "reactstrap";
import { Button } from "react-bootstrap";
import { withRouter } from "react-router";
import "./lawyerARC.css";
import AuthHelperMethods from "../AuthHelperMethods";
import withAuth from "../withAuth";

class userTable extends Component {
  Auth = new AuthHelperMethods();
  state = {
    response: [],
    isLoaded: false,
    userID: "",
    accountStatus: "",
    message: "",
    showbutton: false,
    formID: ""
  };
  // handleChange(event) {
  //   var x = document.getElementsByClassName("hide");
  //   x.getElementsByClassName.display = "none";
  // }
  //accept
  handleClick = async e => {
    e.preventDefault();

    await document.getElementById("myTable").addEventListener("click", evt => {
      var btn = evt.target;
      console.log(btn.tagName);
      if (btn.tagName === "BUTTON") {
        var row = btn.parentNode.parentNode; //td than tr
        var cells = row.getElementsByTagName("td"); //cells
        //    console.log(cells[0].textContent, cells[1].textContent);
        this.setState({
          formID: cells[0].textContent,
          message: ""
        });
      }
    });
    const response = await fetch(
      "/api/lawyer/accept/" + this.state.formID.trim() + "/",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        }
      }

      // this.props.history.re("/"),
      // this.props.history.replace("/adminARC")
      // window.location.reload()
    );
    const response1 = await this.Auth.fetch(
      "/api/lawyer/sendRejectionMsg/" + this.state.formID.trim() + "/",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ lawyerComment: "" })
      }

      // window.location.reload()
    );
    // window.lo;
    //  this.props.history.dispatch("/adminARC",null)
    // this.props.history.replace("/");
    // this.props.history.replace("/adminARC");
  };
  //reject
  handleSubmitR = async e => {
    e.preventDefault();
    this.setState({ showButton: true });
    document.getElementById("textInput").className = "show";
    console.log(document.getElementById("textInput").className);
    await document.getElementById("myTable").addEventListener("click", evt => {
      var btn = evt.target;
      console.log(btn.tagName);
      if (btn.tagName === "BUTTON") {
        var row = btn.parentNode.parentNode; //td than tr
        var cells = row.getElementsByTagName("td"); //cells
        //    console.log(cells[0].textContent, cells[1].textContent);
        this.setState({
          formID: cells[0].textContent
        });
      }
    });
    const response = await this.Auth.fetch(
      "/api/lawyer/sendRejectionMsg/" + this.state.formID.trim() + "/",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        }
      }

      // window.location.reload()
    );

    //    this.props.history.dispatch("/adminARC",null)
  };
  //comment
  handleComment = async e => {
    e.preventDefault();

    await document.getElementById("myTable").addEventListener("click", evt => {
      var btn = evt.target;
      console.log(btn.tagName);
      if (btn.tagName === "BUTTON") {
        var row = btn.parentNode.parentNode; //td than tr
        var cells = row.getElementsByTagName("td"); //cells
        //    console.log(cells[0].textContent, cells[1].textContent);
        this.setState({ formID: cells[0].textContent });
      }
    });
    const response = await fetch(
      "/api/lawyer/sendRejectionMsg/" + this.state.formID.trim() + "/",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ lawyerComment: this.state.message })
      }

      // window.location.reload()
    );

    //    this.props.history.dispatch("/adminARC",null)
  };
  componentDidMount() {
    fetch("api/lawyer/pendingCase/5ca0c88e6a36eb47ec6db2a5/")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          response: json
        });
      });
  }

  render() {
    var { response, isLoaded } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="LawyerARC">
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
                <th> accept</th>
                <th> reject</th>
                {/* <th> rejectionMessage </th> */}
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
                    <Button type="submit" onClick={this.handleClick}>
                      accept
                    </Button>
                  </td>
                  <td>
                    <Button type="submit" onClick={this.handleSubmitR}>
                      reject
                    </Button>
                    <input
                      className="hide"
                      type="text"
                      id="textInput"
                      value={this.state.message}
                      onChange={e => this.setState({ message: e.target.value })}
                    />
                    {!this.state.showbutton ? (
                      <Button
                        type="submit"
                        id="textInput1"
                        onClick={this.handleComment}
                      >
                        add comment
                      </Button>
                    ) : null}
                  </td>
                  {/* <td>{x.rejectionMessage}</td> */}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      );
    }
  }
}

export default withAuth(userTable);
