import React from "react";
import { render } from "react-dom";
import { HashRouter as Router, Route } from "react-router-dom";

import Home from "./Home";
import Dogs from "./Dogs";

const App = () => {
  return (
    <Router>
      <div>
        <Route path="/" component={Home} />
        <Route path="/:dogs" component={Dogs} />
      </div>
    </Router>
  );
};

export default App;
