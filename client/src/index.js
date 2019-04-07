import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import Login from "./components/login";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/css/bootstrap.css";
import Investor from "./components/investor";
ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={Login} />

      <Route path="/investor" component={Investor} />
    </div>
  </Router>,
  document.getElementById("root")
);
