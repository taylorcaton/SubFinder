import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Sub from "./pages/Sub";
import Teacher from "./pages/Teacher"
import Admin from "./pages/Admin"


const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/sub" component={Sub} />
        <Route exact path="/teacher" component={Teacher} />
        <Route exact path="/admin" component={Admin} />            
        <Route component={Login} />
      </Switch>
    </div>
  </Router>
);

export default App;
