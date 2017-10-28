import React from "react";

const SubJobs = props => (
  <div className="container">
    <div className="panel panel-default">
      <div className="panel-body">
        {props.jobs.length ? (
          <div>
            {props.jobs.map(job => (
              <div key={job._id}>
                <div className="panel panel-default">
                  <div className="panel-body">
                    <div className="col-sm-4 text-center"><h4>{job.teacher}</h4></div>
                    <div className="col-sm-4 text-center"><h4>{job.date}</h4></div>
                    <div className="col-sm-4">
                      <button type="button" className="btn btn-block btn-warning">
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
