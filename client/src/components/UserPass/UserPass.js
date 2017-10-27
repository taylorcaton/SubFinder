import React from "react";

const UserPass = props => (
  <div>
    <div className="row">
      <div className="col-md-offset-5 col-md-2">
        <div className="form-login">
        {console.log(props)}
        {(props.invalidLogin) ? 
          <h4 className='text-center text-danger'>Wrong User Name or Password</h4> 
          :
          <h4 className='text-center text-primary'>Welcome back.</h4>}
          

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
              className="btn-group-justified"
              onChange={event => props.handleInputChange(event)}
            >
              <label className="btn btn-primary">
                <input
                  value="Teacher"
                  type="radio"
                  name="userType"
                  checked={props.userType === "Teacher"}
                />
                Teacher
              </label>
              <label className="btn btn-primary">
                <input
                  value="Sub"
                  type="radio"
                  name="userType"
                  checked={props.userType === "Sub"}
                />
                Sub
              </label>
              {/* <label class="btn btn-primary">
              <input type="radio" name="options" id="option3" autocomplete="off" /> Admin 
            </label> */}
            </div>
          </div>

          <div className="text-center">
            <div
              disabled={!(props.userName && props.userPass && props.userType)}
              onClick={props.handleFormSubmit}
              className="btn btn-danger btn-lg"
            >
              <i className="fa fa-life-ring" aria-hidden="true" /> Login
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default UserPass;
