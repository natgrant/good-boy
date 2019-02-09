import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";

class Routes extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route path="/" component={Header} />
        </Router>
      </div>
    );
  }
}

export default Routes;
