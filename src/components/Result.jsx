import React from "react";

class Result extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.isShowing) {
      return (
        <React.Fragment>
          <div className="display-dog">
            <h1>Your dog!</h1>
            <p>{this.props.dog}</p>
          </div>
        </React.Fragment>
      );
    } else {
      return null;
    }
  }
}

export default Result;
