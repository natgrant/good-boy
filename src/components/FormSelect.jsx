import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

class FormSelect extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root} autoComplete="off">
        <FormControl required className={classes.formControl}>
          <InputLabel htmlFor={this.props.name}>{this.props.title}</InputLabel>
          <Select
            id={this.props.name}
            name={this.props.name}
            value={this.props.value}
            onChange={this.props.handleChange}
            inputProps={{
              id: "required"
            }}
            className="form-control"
          >
            <MenuItem value="">
              <em>{this.props.placeholder}</em>
            </MenuItem>
            {this.props.options.map(option => {
              return (
                <MenuItem key={option} value={option} label={option}>
                  {option}
                </MenuItem>
              );
            })}
          </Select>
          <FormHelperText>Required</FormHelperText>
        </FormControl>
      </div>
    );
  }
}

FormSelect.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FormSelect);
