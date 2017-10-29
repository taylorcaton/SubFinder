import React from "react";
import Moment from "react-moment";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";


const CreateJob = props => (
  <div className="container">
    <div className="panel panel-default">
      <div className="panel-body">
        <div className="text-center">
          <h3>Select the day will you be out.</h3>
          <DayPicker
            onDayClick={props.onChange}
            selectedDay={props.date}
            disabledDays={{ daysOfWeek: [0, 6] }}
            enableOutsideDays={true}
          />
          <h3 style={{ fontWeight: "bold" }}>
            <Moment format="dddd, MMMM Do">{props.date}</Moment>
          </h3>

          <button type="button" className="btn btn-primary btn-lg" onClick={props.handleSubmit}>
            Find A Sub!
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default CreateJob;
