import React, { Component } from "react";
import "./externalPortal.css";

class externalPortal extends Component {
  constructor(props) {
    super(props);
    this.state = { isShow: false };
  }

  handleClick = () => {
    this.setState({ isShow: !this.state.isShow });
  };
  signUp() {}
  render() {
    return (
      <div className="background-image">
        {/* <h2>Sumerge</h2> */}
        <a className={"logIn"} href="/login">
          Login{" "}
        </a>
        <a />=
        <a className={"signUp"} href="/signUp">
          {" "}
          Sign Up{" "}
        </a>
      </div>
    );
  }
}

export default externalPortal;
