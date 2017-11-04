import React from "react";
import Moment from 'react-moment';
import "./SubJobs.css"

const SubJobs = props => (
  <div className="container">
    <div className="panel panel-default job-select">
      <div className="panel-body">
        {props.jobs.length ? (
          <div>
            {props.jobs.map(job => (
              job.filled ? (<div key={job._id} />):
              <div key={job._id}>
                <div className="panel panel-default job-panel">
                  <div className="panel-body">
                    <div className="col-sm-4 text-center">
                      <h4>{job.teacher}</h4>
                    </div>
                    <div className="col-sm-4 text-center">
                      <h4><Moment format="dddd, MMMM Do">{job.absentDate}</Moment></h4>
                    </div>
                    <div className="col-sm-4">
                      <button
                        type="button"
                        className="btn btn-block btn-warning"
                        onClick={() => {
                          props.handleTakeJob(job._id, props.subName);
                        }}
                      >
                        Take Job?
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

export default SubJobs;
