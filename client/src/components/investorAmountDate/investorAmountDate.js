import React, { Component } from "react";
import { Table } from "reactstrap";
import AuthHelperMethods from "../AuthHelperMethods";
import withAuth from "../withAuth";
//As a reviewer, I should get all my forms and approve/reject and add comments on each form
//one specific ID
class investorAmountDate extends Component {
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
    this.Auth.fetch("api/investor/notifyAmountAndDueDate")
      .then(response => response.json())
      .then(json => {
        this.setState({
          response: json,
          isLoaded: true
        });
      })
      .catch(error => console.error(error));
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
                <th> amountOfPayment </th>
                <th> dateOfPayment </th>
              </tr>
            </thead>
            <tbody>
              {response.data.map((x, key) => (
                <tr>
                  <td>{x.amountOfPayment}</td>
                  <td>{x.dateOfPayment}</td>

                  <p>{this.state.responseToPost}</p>
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

export default withAuth(investorAmountDate);
