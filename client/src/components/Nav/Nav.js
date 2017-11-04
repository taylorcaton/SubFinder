import React from "react";
import "./Nav.css"

const Nav = () => (
  <nav className="navbar navbar-default navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <div className="navbar-brand">
          {/* <img className="responsive" src="/images/Sonar.png" alt="Logo" /> */}
          <h4 className="title">SubFinder</h4>
        </div>
      </div>
      <div className="nav navbar-nav navbar-right">
        <a href="/" className="btn btn-default">
          Logout
        </a>
      </div>
    </div>
  </nav>
);

export default Nav;
