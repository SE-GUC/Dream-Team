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
        console.log(json);
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
      return response.data.map(x => (
        <div class="card">
          <div class="card-block">
            <h4 class="card-title">{x.companyName}</h4>
            <h6 class="card-subtitle text-muted" />

            <p class="card-text p-y-1">{x.companyNameEng}</p>
            <p class="card-text p-y-1">{x.address}</p>

            <a href="#" class="card-link">
              link
            </a>
            <a href="#" class="card-link">
              Second link
            </a>
          </div>
        </div>
      ));
    }
  }
}

export default formCardTable;
