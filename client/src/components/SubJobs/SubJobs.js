import React from "react";
import API from "../../utils/API";

const Jumbotron = props => (
  <div className="container">
    <div className="panel panel-default">
      <div className="panel-body">
        {props.jobs.length ? (
          <div>
            {props.jobs.map(job => (
              <p>
                {job.teacher} by {job.date}
              </p>
            ))}
          </div>
        ) : (
          <h3>No Results to Display</h3>
        )}
      </div>
    </div>
  </div>
);

export default Jumbotron;
