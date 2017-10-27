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

  getSubs() {
    API.getAllJobs().then(res => {
      this.setState({jobs: res.data})
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
          <SubJobs jobs={this.state.jobs}/>
        </div>
      </div>
    );
  }
}

export default Sub;
