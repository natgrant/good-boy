import React, { Component, Fragment } from "react";
import Routes from "../routes";
import Parallex from "../components/Parallex";
import Form from "../containers/Form";

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="App">
          <Routes />
          <Parallex />
          <Form />
        </div>
      </Fragment>
    );
  }
}

export default App;
