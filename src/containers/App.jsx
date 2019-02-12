import React, { Component, Fragment } from "react";
import Routes from "../routes";
import Background from "../components/Background";
import Form from "../containers/Form";
import DogParks from "../components/DogParks";
import Result from "../components/Result";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDog: null
    };
  }

  // TODO:
  // if null show the form
  // else hide the form component and show doggo result
  setDog = dog => {
    this.setState({
      currentDog: dog
    });
  };

  // TODO: reset state
  reset = () => {
    this.setState({
      currentDog: null
    });
  };

  render() {
    return (
      <Fragment>
        <div className="App">
          <Routes />
          <Background />
          <Form setDog={this.setDog} />
          <Result />
          <DogParks />
        </div>
      </Fragment>
    );
  }
}

export default App;
