import React, { Component } from "react";
import Nav from "../../components/Nav";
import SubJobs from "../../components/SubJobs";
import API from "../../utils/API";
import TWILIO from "../../utils/TWILIO";

class Sub extends Component {
  state = {
    jobs: [],
    userName: ""
  };

  componentDidMount() {
    console.log(this.props.location.state.userName);
    this.setState({
      userName: this.props.location.state.userName
    });
    this.getSubs();
  }

  getSubs = () => {
    API.getAllJobs().then(res => {
      this.setState({ jobs: res.data });
    });
  };

  formatDate = date => {
    var d = new Date(date); // The 0 there is the key, which sets the date to the epoch

    var monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    var day = d.getDate();
    var monthIndex = d.getMonth();
    var year = d.getFullYear();

    return day + " " + monthNames[monthIndex] + " " + year;
  };

  handleTakeJob = (id, subName) => {
    API.findAndUpdateJobByID(id, subName).then(res => {
      console.log(res);
      API.getAllTeachers().then(teachers => {
        const teachersArr = teachers.data;
        teachersArr.forEach(function(ele) {
          if (ele.name === res.data.teacher) {
            console.log(`Sending a text to ${ele.name} at ${ele.phonenum}`);
            TWILIO.sendText({
              phonenum: ele.phonenum,
              msg: `${this.state.userName} has claimed your job on ${this.formatDate(res.data
                .absentDate)}`
            }).then(res => {
              console.log(res);
            });
          }
        }, this);
      });
      this.getSubs();
    });
  };

  render() {
    return (
      <div>
        <Nav />
        <div>
          <div className="container">
            <div className="panel panel-default text-name">
              <div className="panel-body">
                <h1 className="text-center">{this.state.userName}</h1>
              </div>
            </div>
          </div>
          <SubJobs
            jobs={this.state.jobs}
            handleTakeJob={this.handleTakeJob}
            subName={this.state.userName}
          />
        </div>
      </div>
    );
  }
}

export default Sub;
