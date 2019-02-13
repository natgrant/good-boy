import React, { Component, Fragment } from "react";
import Routes from "../routes";
import Background from "../components/Background";
import Form from "../containers/Form";
import DogResult from "../components/DogResult";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDog: "",
      formShowing: true,
      resultShowing: false
    };

    this.setDog = this.setDog.bind(this);
  }

  setDog = dog => {
    console.log(`dog in App: ${dog}`);
    this.setState({
      currentDog: dog,
      formShowing: false,
      resultShowing: true
    });
  };

  // TODO: reset state
  reset = () => {
    this.setState({
      currentDog: "",
      isShowing: true,
      resultShowing: false
    });
  };

  render() {
    return (
      <Fragment>
        <div className="App">
          <Routes />
          <Background />
          <Form isShowing={this.state.formShowing} setDog={this.setDog} />
          <DogResult
            isShowing={this.state.resultShowing}
            dog={this.state.currentDog}
          />
        </div>
      </Fragment>
    );
  }
}

export default App;
