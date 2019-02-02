import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import "./styles/style.scss";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<App />, document.getElementById("app"));
});
