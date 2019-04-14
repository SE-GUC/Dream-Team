import React, { Component } from 'react';

class review extends Component {
  state = {
    responseToPost: []
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/reviewer/pendingCase', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const body = await response.json();

    this.setState({ responseToPost: JSON.stringify(body) });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>
              Me as a reviewer i should be able to view my working forms
            </strong>
          </p>

          <button type="submit">search</button>
        </form>
        <p>{this.state.responseToPost}</p>
      </div>
    );
  }
}

export default review;
