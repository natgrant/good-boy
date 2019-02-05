import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    alert("Your lifestyle is: " + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <div className="form-container">
        <h2>Hey there human, tell me more about your lifestyle habits!</h2>
        <form onSubmit={this.handleSubmit}>
          <label>How would you describe your level of activity:</label>
          <select value={this.state.value} onChange={this.handleChange}>
            <option className="text-muted" value="" selected disabled hidden>
              - Choose here -
            </option>
            <option value="low">Low - less than 30 minutes a day</option>
            <option value="medium">Average - around 1 hour a day</option>
            <option value="high">High - over an hour a day</option>
          </select>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default Form;
