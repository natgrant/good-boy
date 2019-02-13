import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

class ResetButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    if (this.props.isShowing) {
      return (
        <div className="reset-button">
          <Button
            variant="outlined"
            color="secondary"
            className={classes.button + this.props.type}
            onClick={this.props.reset}
          >
            Reset!
          </Button>
        </div>
      );
    } else {
      return null;
    }
  }
}

ResetButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ResetButton);
