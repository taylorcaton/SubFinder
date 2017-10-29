import React, { Component } from "react";
import Nav from "../../components/Nav";
import API from "../../utils/API";

class Sub extends Component {

  state = {
    userName: ''
  };

  componentDidMount(){
    console.log(this.props.location.state.userName)
    this.setState({
      userName: this.props.location.state.userName
    });
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
          <p>Teacher Content</p>
        </div>
      </div>
    );
  }
}

export default Sub;
