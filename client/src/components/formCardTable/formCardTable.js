import React, { Component } from "react";
import { Table } from "reactstrap";
import AuthHelperMethods from "../AuthHelperMethods";
import withAuth from "../withAuth";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
function buttonFormatter(cell, row) {
  return '<BootstrapButton type="submit"></BootstrapButton>';
}

class formCardTable extends Component {
  Auth = new AuthHelperMethods();
  constructor(props) {
    super(props);
    this.state = {
      response: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch("api/form/search")
      .then(res => res.json())
      .then(json => {
        // delete json.data.password;
        delete json.data._id;
        // console.log(json);
        this.setState({
          isLoaded: true,
          response: json
        });
      });
  }

  render() {
    var { response, isLoaded } = this.state;
    // if (!isLoaded) {
    //   return <div>Loading...</div>;
    // } else {
    //   let elements = response.data.map(element => {
    //     return <li key={element.id}>{element.name}</li>;
    //   });
    //   return <ul>{elements}</ul>;
    // }

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      var keys = Object.keys(response);
      const items = [];
      var key;
      var innerKey;
      // var x;

      return response.data.map(x => (
        <div class="card">
          <div className="card-block">
            <h4 className="card-title">{x.companyName}</h4>
            <h6 className="card-subtitle text-muted" />
            <ul>{items}</ul>
            <p className="card-text p-y-1">{x.address}</p>
            <p className="card-text p-y-1">{x.companyType}</p>

            <a href={"/" + x._id} className="card-link">
              link
            </a>
            <a href="#" className="card-link">
              Second link
            </a>
          </div>
        </div>
      ));
    }
  }
}

export default formCardTable;
