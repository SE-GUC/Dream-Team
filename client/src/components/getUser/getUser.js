import React, { Component } from "react";
import "./getUser.css";
import { Table } from "reactstrap";
import AuthHelperMethods from "../AuthHelperMethods";
import withAuth from "../withAuth";

class getUser extends Component {
  Auth = new AuthHelperMethods();
  state = {
    userID: "",
    responseToPost: "",

    name: "",
    email: "",
    accountType: "",
    gender: "",
    nationality: "",
    typeID: "",
    numberID: "",
    dateOfBirth: "",
    address: "",
    phoneNumber: "",
    faxNumber: "",
    accountStatus: "",
    rejectionMessage: ""
  };

  handleSubmit = async e => {
    e.preventDefault();

    // var body50 =  JSON.parse(this.state.userID);
    const response = await this.Auth.fetch(
      "/api/admin/user/" + this.state.userID + "/",
      {
        method: "GET"
      }
    ).catch(err => {
      alert(err);
    });

    const body1 = await response.json();

    if (JSON.stringify(body1).charAt(2) !== "e") {
      this.setState({
        name: JSON.stringify(body1.data.name),
        email: JSON.stringify(body1.data.email),
        accountType: JSON.stringify(body1.data.accountType),
        gender: JSON.stringify(body1.data.gender),
        nationality: JSON.stringify(body1.data.nationality),
        typeID: JSON.stringify(body1.data.typeID),
        numberID: JSON.stringify(body1.data.numberID),
        dateOfBirth: JSON.stringify(body1.data.dateOfBirth),
        address: JSON.stringify(body1.data.address),
        phoneNumber: JSON.stringify(body1.data.phoneNumber),
        faxNumber: JSON.stringify(body1.data.faxNumber),
        accountStatus: JSON.stringify(body1.data.accountStatus),
        rejectionMessage: JSON.stringify(body1.data.rejectionMessage)
      });
    } else {
      this.setState({
        responseToPost: JSON.stringify(body1),
        name: "",
        email: "",
        accountType: "",
        gender: "",
        nationality: "",
        typeID: "",
        numberID: "",
        dateOfBirth: "",
        address: "",
        phoneNumber: "",
        faxNumber: "",
        accountStatus: "",
        rejectionMessage: ""
      });
    }
  };

  render() {
    return (
      <body className="GetUser">
        <form onSubmit={this.handleSubmit}>
          Please insert USER ID:
          <input
            type="text"
            value={this.state.userID}
            onChange={e => this.setState({ userID: e.target.value })}
          />
          <button type="submit">search</button>
        </form>
        <p>{this.state.responseToPost}</p>

        <Table dark hover bordered>
          <thead>
            <tr>
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
              <th> accountStatus </th>
              <th> rejectionMessage </th>
            </tr>
          </thead>
          <tbody>
            {
              <tr>
                <td>{this.state.name}</td>
                <td>{this.state.email}</td>
                <td>{this.state.accountType}</td>
                <td>{this.state.gender}</td>
                <td>{this.state.nationality}</td>
                <td>{this.state.typeID}</td>
                <td>{this.state.numberID}</td>
                <td>{this.state.dateOfBirth}</td>
                <td>{this.state.address}</td>
                <td>{this.state.phoneNumber}</td>
                <td>{this.state.faxNumber}</td>
                <td>{this.state.accountStatus}</td>
                <td>{this.state.rejectionMessage}</td>
              </tr>
            }
          </tbody>
        </Table>
      </body>
    );
  }
}

export default withAuth(getUser);
