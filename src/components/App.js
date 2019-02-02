import React from "react";
import { render } from "react-dom";
import { HashRouter as Router, Route } from "react-router-dom";

import Home from "./Home";
import Dogs from "./Dogs";
import Form from "./Form";

const App = () => {
  return (
    <Router>
      <div>
        <div>
          <Route path="/" component={Home} />
        </div>
        <Form />
      </div>
    </Router>
  );
};

export default App;

// TODO: ROUTES
// <Route path="/:dogs" component={Dogs} />
