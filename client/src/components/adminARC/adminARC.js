import React, { Component } from "react";
import { Table } from "reactstrap";
import { Button } from "react-bootstrap";
import { withRouter } from "react-router";
import "./adminARC.css";

class userTable extends Component {
  state = {
    response: [],
    isLoaded: false,
    userID: "",
    accountStatus: "",
    message: "",
    showbutton: false
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
          userID: cells[0].textContent,
          message: ""
        });
      }
    });
    const response = await fetch(
      "/api/admin/approve/" + this.state.userID + "/",
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
    const response1 = await fetch(
      "/api/admin/sendRejectionMsg/" + this.state.userID + "/",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ rejectionMessage: "" })
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
          userID: cells[0].textContent
        });
      }
    });
    const response = await fetch(
      "/api/admin/reject/" + this.state.userID + "/",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        }
      }
      // this.props.history.replace("/"),
      // this.props.history.replace("/adminARC")

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
        this.setState({ userID: cells[0].textContent });
      }
    });
    const response = await fetch(
      "/api/admin/sendRejectionMsg/" + this.state.userID + "/",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ rejectionMessage: this.state.message })
      }

      // window.location.reload()
    );

    //    this.props.history.dispatch("/adminARC",null)
  };
  componentDidMount() {
    fetch("api/user/getUsers")
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
        <div className="AdminARC" id="myTable">
          <Table dark hover bordered>
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
                <th> investorType </th>
                <th> capital </th>
                <th> capitalCurrency </th>
                <th>accountStatus</th>
                <th> accept</th>
                <th> reject</th>
                <th> rejectionMessage </th>
              </tr>
            </thead>
            <tbody>
              {response.data.map((x, key) => (
                <tr>
                  <td className="hide">{(key = x._id)}</td>
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
                  <td>{x.investorType}</td>
                  <td>{x.capital}</td>
                  <td>{x.capitalCurrency}</td>
                  <td>{x.accountStatus ? "true" : "false"} </td>
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
                  <td>{x.rejectionMessage}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      );
    }
  }
}

export default withRouter(userTable);
