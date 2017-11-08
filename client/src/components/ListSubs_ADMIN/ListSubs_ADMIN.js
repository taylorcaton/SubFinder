import React from "react";
import "./ListSubs_ADMIN.css"

const ListSubs_ADMIN = props => (
  <div>
    <div className="panel ADMIN-subs-panel">
      <div className="panel-body">
        {props.subs.length ? (
          <div>
            {props.subs.map(sub => (
              <div key={sub._id}>
                <div className="panel panel-danger sub-panel">
                  <div className="panel-body">
                    <div className="col-sm-4 text-left">
                      <h4>{sub.name}</h4>
                    </div>
                    <div className="col-sm-4 text-left">
                      <h4>{sub.phonenum}</h4>
                    </div>
                    <div className="col-sm-4">
                      <button
                        type="button"
                        className="btn btn-block btn-danger"
                        onClick={() => {
                          props.showModal("Sub", sub._id);
                        }}
                      >
                        Edit Substitute?
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

export default ListSubs_ADMIN;
