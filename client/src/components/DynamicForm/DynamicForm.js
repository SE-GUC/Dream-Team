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
        <div>
          {response.data.map((x, key) => (
            <tr>
              <td>
                {x.formType} {x.formSchema}
              </td>
            </tr>
          ))}
        </div>
      );
    }
  }
}

export default DynamicForm;
