import React, { Component } from "react";
import { Table } from "reactstrap";
var _ = require("lodash");
// var filter = require('lodash.filter');
const bodyParser = require("body-parser");
class searchBar extends React.Component {
  state = {
    query: "",
    orgData: [],
    filteredData: []
  };

  handleInputChange = event => {
    const query = event.target.value;
    // console.log("hena")
    this.setState(prevState => {
      const filteredData = _.filter(prevState.orgData, element => {
        return element.some(v => v === query);
      });
      //  console.log("hena")

      return {
        query: query,
        filteredData: filteredData
      };
    });
  };

  getData = () => {
    fetch(`api/form/search`)
      .then(response => response.json())
      .then(response => {
        const { query } = this.state;
        const filteredData = _.filter(response, element => {
          return element.some(v => v === query);
        });

        this.setState({
          orgData: response,
          filteredData: filteredData
        });
      });
  };

  componentWillMount() {
    this.getData();
  }

  render() {
    console.log("yt3lmo");
    return (
      <div className="searchForm">
        <form>
          <input
            placeholder="Search for..."
            S
            value={this.state.query}
            onChange={this.handleInputChange}
          />
        </form>
        <div>
          {this.state.filteredData.map(i => (
            <p>{i.name}</p>
          ))}
        </div>
      </div>
    );
  }
}
export default searchBar;
