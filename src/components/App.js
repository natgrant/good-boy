import React from "react";
import { render } from "react-dom";
import { HashRouter as Router, Route } from "react-router-dom";

import Home from "./Home";

const App = () => {
  return (
    <Router>
      <div>
        <Route path="/" component={Home} />
      </div>
    </Router>
  );
};

export default App;
