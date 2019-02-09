import React from "react";
import ReactDOM from "react-dom";
import "./styles/style.scss";
import App from "./containers/App";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<App />, document.getElementById("app"));
});
