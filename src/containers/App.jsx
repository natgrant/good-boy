import React, { Component, Fragment } from "react";
import Routes from "../routes";
import Background from "../components/Background";
import Form from "../containers/Form";
import DogParks from "../components/DogParks";

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="App">
          <Routes />
          <Background />
          <Form />
          <DogParks />
        </div>
      </Fragment>
    );
  }
}

export default App;
