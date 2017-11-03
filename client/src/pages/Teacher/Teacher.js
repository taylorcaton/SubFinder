import React, { Component } from "react";
import Nav from "../../components/Nav";
import CreateJob from "../../components/CreateJob";
import API from "../../utils/API"; 
import "./Teacher.css"

class Teacher extends Component {
  state = {
    userName: "",
    date: new Date().getTime(),
    submitJob: false
  };

  componentDidMount() {
    console.log(this.props.location.state.userName);
    this.setState({
      userName: this.props.location.state.userName
    });
  }

  onChange = date => this.setState({ date: date.getTime() });

  handleSubmit = event => {
    event.preventDefault();
    console.log(
      `Lets create a JOB for ${this.state.userName} on ${this.state.date}`
    );
    API.saveJob(this.state).then(res => {
      console.log(res);
      this.setState({ submitJob: true });
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
          {this.state.submitJob ? (
            <div className="container">
              <div className="panel panel-success">
                <div className="panel-heading">
                  <h4 className="text-center">Job Created!</h4>
                </div>
              </div>
            </div>
          ) : (
            <div />
          )}
          <CreateJob
            onChange={this.onChange}
            date={this.state.date}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}

export default Teacher;
