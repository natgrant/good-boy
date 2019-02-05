import React from "react";

const Iput = props => {
  return (
    <div className="form-group">
      <label htmlFor={props.name} className="form-label">
        {props.title}
      </label>
      <input
        className="form-input"
        id={props.id}
        value={props.value}
        onChange={props.handleChange}
      />
    </div>
  );
};

export default Input;
