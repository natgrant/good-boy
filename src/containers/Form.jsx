import React, { Component } from "react";
import SubmitButton from "../components/SubmitButton";
import FormSelect from "../components/FormSelect";
import dogData from "../../data/dogs";

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
    console.log(dogData.dogs[0]);
    let dogMappings = {
      "Sedentary-Apartment-Yes": dogData.dogs[4],
      "Sedentary-Apartment-No": dogData.dogs[0],
      "Sedentary-Suburban House-Yes": dogData.dogs[1],
      "Sedentary-Suburban House-No": dogData.dogs[2],
      "Sedentary-Countryside-Yes": dogData.dogs[0],
      "Sedentary-Countryside-No": dogData.dogs[0],

      "Active-Apartment-Yes": dogData.dogs[0],
      "Active-Apartment-No": dogData.dogs[0],
      "Active-Suburban House-Yes": dogData.dogs[0],
      "Active-Suburban House-No": dogData.dogs[0],
      "Active-Countryside-Yes": dogData.dogs[0],
      "Active-Countryside-No": dogData.dogs[0],

      "Highly Active-Apartment-Yes": dogData.dogs[0],
      "Highly Active-Apartment-No": dogData.dogs[0],
      "Highly Active-Suburban House-Yes": dogData.dogs[0],
      "Highly Active-Suburban House-No": dogData.dogs[0],
      "Highly Active-Countryside-Yes": dogData.dogs[0],
      "Highly Active-Countryside-No": dogData.dogs[0]
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
