import React, { Component } from "react";
import SubmitButton from "../components/SubmitButton";
import FormSelect from "../components/FormSelect";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFormSubmit: true,
      currentDog: "",
      userInput: {
        lifestyle: "",
        availableSpace: "",
        allergies: ""
      },
      lifestyleOptions: ["Sedentary", "Active", "Highly Active"],
      availableSpace: ["Apartment", "Suburban House", "Countryside"],
      allergies: ["Yes", "No"]
    };

    this.handleFormInput = this.handleFormInput.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.mapHumanAttributesToDog = this.mapHumanAttributesToDog.bind(this);
  }

  handleFormInput(event) {
    let value = event.target.value;
    let name = event.target.name;

    this.setState(
      //set state directly for each
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

    let { lifestyle, availableSpace, allergies } = this.state.userInput;
    let dog = this.mapHumanAttributesToDog(
      lifestyle,
      availableSpace,
      allergies
    );
    console.log(`dog in handleFormSubmit: ${dog}`);

    this.props.setDog(dog);
  }

  mapHumanAttributesToDog(lifestyle, availableSpace, allergies) {
    // return dogs based on human attributes
    let dogMappings = {
      "Sedentary-Apartment-Yes": "Terrier",
      "Sedentary-Apartment-No": "Spaniel",
      "Sedentary-Suburban House-Yes": "Terrier",
      "Sedentary-Suburban House-No": "Spaniel",
      "Sedentary-Countryside-Yes": "Terrier",
      "Sedentary-Countryside-No": "Spaniel",

      "Active-Apartment-Yes": "Terrier",
      "Active-Apartment-No": "Spaniel",
      "Active-Suburban House-Yes": "Terrier",
      "Active-Suburban House-No": "Spaniel",
      "Active-Countryside-Yes": "Terrier",
      "Active-Countryside-No": "Spaniel",

      "Highly Active-Apartment-Yes": "Terrier",
      "Highly Active-Apartment-No": "Spaniel",
      "Highly Active-Suburban House-Yes": "Terrier",
      "Highly Active-Suburban House-No": "Spaniel",
      "Highly Active-Countryside-Yes": "Terrier",
      "Highly Active-Countryside-No": "Spaniel"
    };

    let dogMappingsKey = `${lifestyle}-${availableSpace}-${allergies}`;
    let dog = dogMappings[dogMappingsKey];

    console.log(`the dog is: ${dog}`);

    if (!dog) dog = "NO MATCH SRRY :,(";
    return dog;
  }

  render() {
    if (this.props.isShowing) {
      return (
        <div className="user-form">
          <h1 id="form-header">
            Woof, please do me a heckin' kindness and give me some more detail:
          </h1>
          <form onSubmit={this.handleFormSubmit}>
            <FormSelect
              title={"Lifestyle"}
              name={"lifestyle"}
              options={this.state.lifestyleOptions}
              value={this.state.userInput.lifestyle}
              placeholder={"Select Lifestyle"}
              handleChange={this.handleFormInput}
            />
            <FormSelect
              title={"Housing"}
              name={"availableSpace"}
              options={this.state.availableSpace}
              value={this.state.userInput.availableSpace}
              placeholder={"Select Housing"}
              handleChange={this.handleFormInput}
            />
            <FormSelect
              title={"Allergies"}
              name={"allergies"}
              options={this.state.allergies}
              value={this.state.userInput.allergies}
              placeholder={"Please Select"}
              handleChange={this.handleFormInput}
            />
            <SubmitButton
              action={this.handleFormSubmit}
              // disabled={this.state.showFormSubmit}
              isShowing={this.state.showFormSubmit}
              type={"submit"}
              title={"Go Fetch"}
            />
          </form>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default Form;
