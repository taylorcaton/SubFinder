import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Login from "./pages/Login";


const App = () => (
  <Router>
    <div>
      
      <Nav />
      
      <Switch>
        <Route exact path="/" component={Login} />
        <Route component={Login} />
      </Switch>
    </div>
  </Router>
);

export default App;
