import React, { Component } from "react";

// Import Components //
import Checkbox from "./Checkbox";
import Input from "./Input";
import Select from "./Select";
import Button from "./Button";

// const select = "Select from the following";

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        lifestyle: "",
        housing: "",
        allergies: "",
        age: 0
      },
      lifestyleOptions: ["low", "medium", "high"],
      housingOptions: [
        "apartment",
        "house no yard",
        "house with yard",
        "country"
      ]
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }
  handleFormSubmit(event) {
    // alert("Your lifestyle is: " + this.state.value);
    // event.preventDefault();
  }
  handleClearForm(event) {
    // this.setState({ value: event.target.value });
  }
  render() {
    return (
      <form className="container" onSubmit={this.handleFormSubmit}>
        <Select /> {/*Activity Level*/}
        <Checkbox /> {/*Allergies*/}
        {/* <Input
          type={"text"}
          value={this.state.value}
          placeholder={"Enter"}
        />{" "}
        {/*Age*/}
        <Button /> {/*Submit*/}
        <Button /> Clear form */}
      </form>
    );
  }
}

export default Form;
