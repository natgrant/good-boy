import React from "react";

const Button = props => {
  return (
    <button className={props.type} onClick={props.action}>
      {props.title}
    </button>
  );
};

export default Button;
