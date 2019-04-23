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
                <th> Rules </th>
              </tr>
            </thead>
            <tbody>
              {response.data.map(x => (
                <div>
                  <tr>
                    <th>{x.one}</th>
                  </tr>
                  <tr>
                    <th>{x.two}</th>
                  </tr>
                  <th>{x.three}</th>

                  <tr>
                    <th>{x.four}</th>
                  </tr>
                  <tr>
                    <th>{x.five}</th>
                  </tr>
                  <tr>
                    <th>{x.six}</th>
                  </tr>
                  <tr>
                    <th>{x.seven}</th>
                  </tr>
                  <tr>
                    <th>{x.eight}</th>
                  </tr>
                </div>
              ))}
            </tbody>
          </Table>
        </div>
      );
    }
  }
}
export default comRule;
