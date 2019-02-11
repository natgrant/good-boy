import React, { Component, Fragment } from "react";
import Routes from "../routes";
import Background from "../components/Background";
import Form from "../containers/Form";
import Result from "../components/Result";
import DogParks from "../components/DogParks";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDog: null
    };
  }

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
