import React from "react";
import "./ListTeachers_ADMIN.css"

const ListTeachers_ADMIN = props => (
  <div>
    <div className="panel ADMIN-teachers-panel">
      <div className="panel-body">
        {props.teachers.length ? (
          <div>
            {props.teachers.map(teacher => (
              <div key={teacher._id}>
                <div className="panel panel-danger teacher-panel">
                  <div className="panel-body">
                    <div className="col-sm-4 text-left">
                      <h4>{teacher.name}</h4>
                    </div>
                    <div className="col-sm-4 text-left">
                      <h4>{teacher.phonenum}</h4>
                    </div>
                    <div className="col-sm-4">
                      <button
                        type="button"
                        className="btn btn-block btn-danger"
                        onClick={() => {
                          props.showModal("Teacher", teacher._id);
                        }}
                      >
                        Edit Teacher?
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h3>No Results to Display</h3>
        )}
      </div>
    </div>
  </div>
);

export default ListTeachers_ADMIN;
