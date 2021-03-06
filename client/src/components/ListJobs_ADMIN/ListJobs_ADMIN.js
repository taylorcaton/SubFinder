import React from "react";
import Moment from "react-moment"
import "./ListJobs_ADMIN.css"

const ListJobs_ADMIN = props => (
  <div>
    <div className="panel ADMIN-jobs-panel">
      <div className="panel-body">
        {props.jobs.length ? (
          <div>
            {props.jobs.map(job => (
              <div key={job._id}>
                <div className="panel panel-danger job-panel">
                  <div className="panel-body">
                    <div className="col-sm-3 text-left">
                      {job.filled ? (
                        <h4 className='text-success'>Filled by {job.sub}</h4>
                      ) : (
                        <h4 className='text-danger'>Need a Sub</h4>
                      )}
                    </div>
                    <div className="col-sm-3 text-left">
                      <h4>{job.teacher}</h4>
                    </div>
                    <div className="col-sm-3 text-left">
                      <h4>
                        <Moment format="dddd, MMMM Do">{job.absentDate}</Moment>
                      </h4>
                    </div>
                    <div className="col-sm-3">
                      <button
                        type="button"
                        className="btn btn-block btn-danger"
                        onClick={() => {
                          props.handleRemoveJob(job._id);
                        }}
                      >
                        Remove Job?
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

export default ListJobs_ADMIN;
