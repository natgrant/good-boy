import React, { Component } from "react";
import { getParks } from "../api/dogParks";

export default class DogParks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breach: [],
      dataClasses: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.clickHandle = this.clickHandle.bind(this);
  }

  handleChange(event) {
    this.setState({
      breach: [event.target.value]
    });
  }
  clickHandle() {
    return getParks(this.state.breach).then(res =>
      this.setState({ breach: res })
    );
  }

  render() {
    return (
      <div className="formContainer">
        <form onSubmit={event => event.preventDefault()}>
          <label>
            <input
              type="text"
              email="text"
              onChange={this.handleChange}
              placeholder="enter your area"
            />
          </label>
          <button className="submitButton" onClick={this.clickHandle}>
            Submit
          </button>
        </form>

        <ul>
          {this.state.breach.map((obj, i) => (
            <li key={i}>
              {obj.Domain}: <p>{obj.DataClasses} </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
