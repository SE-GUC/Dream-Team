import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import Login from "./components/login";
import UpdateTest from "./components/updateTest";
import "./index.css";

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={Login} />
      <Route path="/update" component={UpdateTest} />
    </div>
  </Router>,
  document.getElementById("root")
);
