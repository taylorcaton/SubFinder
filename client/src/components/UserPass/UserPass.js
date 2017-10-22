import React from "react";
import { Link, Route } from "react-router-dom";

const UserPass = props => (
  <div>
    <div className="row">
      <div className="col-md-offset-5 col-md-2">
        <div className="form-login">
          <h4>Welcome back.</h4>
          <input
            value={props.userName}
            onChange={props.handleInputChange}
            type="text"
            name="userName"
            className="form-control input-sm chat-input"
            placeholder="username"
          />

          <input
            value={props.userPass}
            onChange={props.handleInputChange}
            type="text"
            name="userPass"
            className="form-control input-sm chat-input"
            placeholder="password"
          />
          <div className="text-center">
            <div
              disabled={!(props.userName && props.userPass)}
              onClick={props.handleFormSubmit} 
              className="btn btn-danger btn-lg">
              <i className="fa fa-life-ring" aria-hidden="true" /> Login
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default UserPass;
