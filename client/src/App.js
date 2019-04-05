import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    response: '',
    post: {email:'',
            password:''
          },
          email:'',
          password    :'',
    responseToPost: '',
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.data[1].name }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/user/getUsers');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email:this.state.email , password:this.state.password}),
    });
    const body = await response.text();

    this.setState({ responseToPost: body });
  };
  render() {
    return (
      <div className="App">
        <p>{this.state.response}</p>
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Post to Server:</strong>
          </p>
          email
          <input
            type="text"
            value={this.state.email}
            onChange={e => this.setState({ email:e.target.value })}
          />
          password
          <input
            type="text"
            value={this.state.password}
            onChange={e => this.setState({ password:e.target.value })}
          />
          <button type="submit">log in</button>
        </form>
        <p>{this.state.responseToPost}</p>
      </div>
    );
  }
}

export default App;
