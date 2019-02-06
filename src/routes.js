// Remove routes from App & add here!!

import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Form from "./containers/FormContainer";
import Home from "./containers/HomeContainer";

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default Routes;
