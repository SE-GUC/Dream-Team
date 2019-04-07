import React, { Component } from 'react';
import './login.css';

class Login extends Component {
  state = {
          email:'',
          password :'',
    responseToPost: '',
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
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Login to Server:</strong>
          </p>
          Email:
          <input
            type="text"
            value={this.state.email}
            onChange={e => this.setState({ email:e.target.value })}
          />
          Password:
          <input
            type="password"
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

export default Login;
