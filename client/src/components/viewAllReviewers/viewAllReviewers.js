import React, { Component } from "react";
import { Table } from "reactstrap";
import axios from "axios";
class viewAllReviewers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: [],
      isLoaded: false,
      update: true
    };
  }
  componentDidMount() {
    fetch("api/admin/reviewer")
      .then(response => response.json())
      .then(data => {
        console.log(data); // Prints result from `response.json()` in getRequest
      })
      .catch(error => console.error(error));
  }

  // componentDidMount() {
  //   axios
  //     .get("http://localhost:5000/api/admin/getReviewer")
  //     .then(res => {
  //       const response = res.data;
  //       this.setState({ response: response });
  //       this.setState({ isLoaded: true });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }
  //   showUpdate() {
  render() {
    var { response, isLoaded } = this.state;
    let x;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="formTable">
          <Table dark striped hover bordered>
            <thead>
              <tr>
                <th> accountStatus</th>
                <th> rejectionMessage </th>
                <th> _id </th>
                <th> name </th>
                <th> accountType </th>
                <th> gender </th>
                <th> nationality </th>
                <th> typeID </th>
                <th> numberID </th>
                <th> dateOfBirth </th>
                <th> address </th>
                <th> phoneNumber </th>
                <th> faxNumber </th>
                <th> email </th>
                {/* <th> password </th> */}
                <th> __v </th>
              </tr>
            </thead>
            <tbody>
              {response.data.map(x => (
                <tr>
                  <td> {x.accountStatus}</td>
                  <td>{x.rejectionMessage}</td>
                  <td>{x._id}</td>
                  <td>{x.name}</td>
                  <td>{x.accountType}</td>
                  <td>{x.gender}</td>
                  <td>{x.nationality}</td>
                  <td>{x.typeID}</td>
                  <td>{x.numberID}</td>
                  <td>{x.dateOfBirth}</td>
                  <td>{x.address}</td>
                  <td>{x.phoneNumber}</td>
                  <td>{x.faxNumber}</td>
                  <td>{x.email}</td>
                  {/* <td>{x.password}</td> */}
                  <td>{x.__v}</td>
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

export default viewAllReviewers;