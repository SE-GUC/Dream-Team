import React, { Component } from "react";
import { Table } from "reactstrap";
class calcRule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: [],
      isLoaded: false
    };
  }
  componentDidMount() {
    fetch("api/user/CalculationRules")
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
                <th>Entity </th>
                <th> Law 159 </th>
                <th> Law 72 </th>
              </tr>
            </thead>
            <tbody>
              {response.data.map(x => (
                <tr>
                  <td>{x.Entity}</td>
                  <td>{x.Law159}</td>
                  <td>{x.Law72}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      );
    }
  }
}
export default calcRule;
