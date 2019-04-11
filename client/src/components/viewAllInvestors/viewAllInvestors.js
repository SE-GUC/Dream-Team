import React, { Component } from "react";
import { Table } from "reactstrap";
const axios = require("axios");

class viewAllInvestors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/admin/viewinvestor")
      .then(res => {
        const response = res.data;
        this.setState({ response: response });
        this.setState({ isLoaded: true });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    var { response, isLoaded } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="Table">
          <Table dark hover bordered striped size="sm">
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
                <th> investorType </th>
                <th> capital </th>
                <th> capitalCurrency </th>
                <th> accountStatus </th>
                <th> rejectionMessage </th>
              </tr>
            </thead>
            <tbody>
              {response.data.map(x => (
                <tr>
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
                  <td>{x.accountStatus}</td>
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

export default viewAllInvestors;