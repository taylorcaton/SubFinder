import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import UserPass from "../../components/UserPass";
import API from "../../utils/API";

class Login extends Component {
  state = {
    userName: "",
    userPass: "",
    userType: "Teacher"
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    console.log(`This is where the login call will go!`);
    console.log(`Server is looking for a ${this.state.userType} named ${this.state.userName} using ${this.state.userPass}`);

    if (this.state.userName && this.state.userPass) {
      API.getSubstitutes().then(res => console.log(res));
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
