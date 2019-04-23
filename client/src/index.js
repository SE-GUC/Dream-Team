import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./app";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

// import ReviewerViewhisForms from "./components/ReviewerViewhisForms";

const app = (
  <Router>
    <App />
  </Router>
);
ReactDOM.render(app, document.getElementById("root"));

serviceWorker.unregister();
