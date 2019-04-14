import React, { Component } from "react";
import { Table } from "reactstrap";
class comRule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: [],
      isLoaded: false
    };
  }
  componentDidMount() {
    fetch("api/externalPortal/companyRules")
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
        <div className="rule">
          <Table dark hover bordered>
            <thead>
              <tr>
                <th>Number </th>
                <th> Rules </th>
              </tr>
            </thead>
            <tbody>
              {response.data.map(x => (
                <tr>
                  <td>{x.one}</td>
                  <td>{x.two}</td>
                  <td>{x.three}</td>
                  <td>{x.four}</td>
                  <td>{x.five}</td>
                  <td>{x.six}</td>
                  <td>{x.seven}</td>
                  <td>{x.eight}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      );
    }
  }
}
export default comRule;
