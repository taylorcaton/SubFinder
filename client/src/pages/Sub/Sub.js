import React, { Component } from "react";
import Nav from "../../components/Nav";
import SubJobs from "../../components/SubJobs"
import API from "../../utils/API";

class Sub extends Component {

  state = {
    jobs: [],
    userName: ''
  };

  componentDidMount(){
    console.log(this.props.location.state.userName)
    this.setState({
      userName: this.props.location.state.userName
    });
    this.getSubs();
  }

  getSubs = () => {
    API.getAllJobs().then(res => {
      this.setState({jobs: res.data})
    })
  }

  handleTakeJob = (id,subName) => {

    API.findAndUpdateJobByID(id,subName).then(res => {
      console.log(res);
      this.getSubs();
    })
  }

  render() {
    return (
      <div>
        <Nav />
        <div>
          <div className="container">
            <div className="panel panel-default">
              <div className="panel-body">
                <h1 className="text-name">Welcome {this.state.userName}</h1>
              </div>
            </div>
          </div>
          <SubJobs jobs={this.state.jobs} handleTakeJob={this.handleTakeJob} subName={this.state.userName}/>
        </div>
      </div>
    );
  }
}

export default Sub;
