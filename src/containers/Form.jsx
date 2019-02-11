import React, { Component } from "react";
import Select from "../components/Select";
import Button from "../components/Button";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: {
        lifestyle: "",
        availableSpace: "",
        allergies: ""
      },
      lifestyleOptions: ["Sedentary", "Active", "Highly Active"],
      availableSpace: ["Apartment", "Suburban House", "Countryside"],
      allergies: ["Yes", "No"]
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  handleInput(event) {
    let value = event.target.value;
    let name = event.target.name;
    this.setState(
      prevState => ({
        userInput: {
          ...prevState.userInput,
          [name]: value
        }
      }),
      () => console.log(this.state.userInput)
    );
  }
  handleFormSubmit(event) {
    event.preventDefault();
    let userData = this.state.userInput;
    console.log(userData);
  }
  render() {
    return (
      <div className="user-form">
        <h1>Hey human tell me more</h1>
        <form onSubmit={this.handleFormSubmit}>
          <Select
            title={"Lifestyle"}
            name={"lifestyle"}
            options={this.state.lifestyleOptions}
            value={this.state.userInput.lifestyle}
            placeholder={"Select Lifestyle"}
            handleChange={this.handleInput}
          />
          <Select
            title={"Housing"}
            name={"availableSpace"}
            options={this.state.availableSpace}
            value={this.state.userInput.availableSpace}
            placeholder={"Select Housing"}
            handleChange={this.handleInput}
          />
          <Select
            title={"Allergies"}
            name={"allergies"}
            options={this.state.allergies}
            value={this.state.userInput.allergies}
            placeholder={"Please Select"}
            handleChange={this.handleInput}
          />
          <Button
            action={this.handleFormSubmit}
            type={"submit"}
            title={"Submit"}
          />
        </form>
      </div>
    );
  }
}
export default Form;