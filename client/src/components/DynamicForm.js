import React, { Component } from 'react';
import { Table } from 'reactstrap';

class DynamicForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch('api/admin/formType')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          response: json[0]
        });
      });
  }

  render() {
    var { response, isLoaded } = this.state;
    let table = [];
    for (let i = 0; i < response.length; i++) {
      table.push(<tr>{response[i]}</tr>);
    }
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return table;
    }
  }
}

export default DynamicForm;
