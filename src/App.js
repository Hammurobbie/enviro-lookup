import React from "react";
import { Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import SurveyPage from "./components/SurveyPage";

function App(props) {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/survey/:id" {...props} component={SurveyPage} />
    </div>
  );
}

export default App;
