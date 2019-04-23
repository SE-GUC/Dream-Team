import React, { Component } from "react";
import "./login.css";
import AuthHelperMethods from "../AuthHelperMethods";
import { Button, Form } from "react-bootstrap";
import Popup from "reactjs-popup";
// import withAuth from './components/withAuth';
class Login extends Component {
  Auth = new AuthHelperMethods();
  constructor(props) {
    super(props);
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: "",
      password: "",
      responseToPost: ""
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    this.Auth.login(this.state.email, this.state.password)
      .then(res => {
        if (res === false) {
          return alert("Sorry those credentials don't exist!");
        }
        const type = this.Auth.getConfirm().type;
        if (type === "investor") this.props.history.replace("/investor");
        if (type === "admin") this.props.history.replace("/admin");
        if (type === "reviewer") this.props.history.replace("/reviewer");
        if (type === "lawyer") this.props.history.replace("/lawyer");
        // window.location.href = "/";
      })
      .catch(err => {
        alert(err);
      });
  };

  render() {
    return (
      <div className="background-image2">
        <div className="LoginView">
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="InputContainer">Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label className="InputContainer">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}
              />
            </Form.Group>

            <Popup
              trigger={
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              }
              position="bottom center"
            >
              <div>{this.state.responseToPost}</div>
            </Popup>
          </Form>
        </div>
      </div>
    );
  }
}

export default Login;
