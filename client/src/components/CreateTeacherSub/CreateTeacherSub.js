import React from "react";

const CreateTeacherSub = props => (
  <div>
    <div className="panel panel-default">
      <div className="panel-body">
        <div>
          <div className="">
            <div
              onChange={event => props.handleRadioChange(event)}
              className="btn-group"
            >
              <p className="">
                <input type="radio" name="createType" value='Teacher' checked={props.createType === "Teacher"} />
                 Teacher
              </p>
              
              <p className="">
                <input type="radio" name="createType" value='Substitute' checked={props.createType === "Substitute"} />
                 Substitute
              </p>

            </div>
          </div>
          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="form-control createInput"
              required="required"
              onChange={(event) => props.handleCreateChange(event)}
              value={props.createObj.name}
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control createInput"
              required="required"
              onChange={props.handleCreateChange}
              value={props.createObj.password}
            />
          </div>
          <div className="input-group">
            <label>Phone Number</label>
            <input
              type="text"
              name="phonenum"
              className="form-control createInput"
              required="required"
              onChange={props.handleCreateChange}
              value={props.createObj.phonenum}
            />
          </div>

          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={props.create}
            disabled={!(props.createObj.name && props.createObj.password && props.createObj.phonenum && props.createType)}
          >
            Create!
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default CreateTeacherSub;
