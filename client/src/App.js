import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Sub from "./pages/Sub";


const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/sub" component={Sub} />        
        <Route component={Login} />
      </Switch>
    </div>
  </Router>
);

export default App;
