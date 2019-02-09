import React, { Component, Fragment } from "react";
import Routes from "../routes";
import Background from "../components/Background";
import Form from "../containers/Form";

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="App">
          <Routes />
          <Background />
          <Form />
        </div>
      </Fragment>
    );
  }
}

export default App;
