import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron"
import UserPass from "../../components/UserPass";

class Login extends Component {

  state = {
    userName: "",
    userPass: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.userName && this.state.userPass) {
      console.log(`This is where the login call will go!`);
    }
  };


  render() {
    return (
      <div>
        <Jumbotron />
        <UserPass 
          userName={this.state.userName}
          userPass={this.state.userPass}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
      </div>
    );
  }
}

export default Login;