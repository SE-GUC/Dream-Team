import React, { Component } from "react";
import { Table } from "reactstrap";
var _ = require("lodash");
// var filter = require('lodash.filter');
const bodyParser = require("body-parser");
class searchBar extends React.Component {
  state = {
    query: "",
    orgData: []
    // filteredData: []
  };

  handleInputChange = event => {
    const query = event.target.value;

    this.setState(prevState => {
      const filteredData = _.filter(prevState.orgData, element => {
        return element.some(v => v === query);
      });

      return {
        query: query,
        filteredData: filteredData
      };
    });
  };

  handleSubmit = () => {
    fetch(
      "api/internalPortal/",
      {
        method: "GET",
        body: this.state.query
      }

        .then(response => response.json())
        .then(res => {
          // const { query } = this.state;
          // const filteredData = _.filter(res, element => {
          //   return element.some(v => v === query);
          // });

          this.setState({
            orgData: res
            // ,
            // filteredData: filteredData
          });
        })
    );
  };

  //  const response = await this.Auth.fetch(
  //     "/api/admin/user" + this.state.userID + "/",
  //     {
  //       method: "GET"
  //     }
  //   ).catch(err => {
  //     alert(err);
  //   });

  render() {
    console.log("yt3lmo");
    return (
      <div className="searchForm">
        <form>
          <input
            placeholder="Search for..."
            S
            value={this.state.query}
            onChange={e => this.setState({ query: e.target.value })}
          />

          <button type="submit" onClick={this.handleSubmit}>
            search
          </button>
        </form>
        <div>
          {this.state.orgData.map(i => (
            <p>{i.companyName}</p>
          ))}
        </div>
      </div>
    );
  }
}
export default searchBar;
