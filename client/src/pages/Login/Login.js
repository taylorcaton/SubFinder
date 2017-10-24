import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import UserPass from "../../components/UserPass";
import API from "../../utils/API";

class Login extends Component {
  state = {
    userName: "",
    userPass: "",
    userType: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(`Name: ${name}, Value: ${value} passed`)
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    console.log(`This is where the login call will go!`);
    console.log(`Server is looking for a ${this.state.userType} named ${this.state.userName} using ${this.state.userPass}`);

    if (this.state.userName && this.state.userPass && this.state.userType=='Sub') {
      API.loginSubstitute(this.state.userName).then(res => console.log(res));
    }
  };

  render() {
    return (
      <div>
        <Jumbotron />
        <UserPass
          userName={this.state.userName}
          userPass={this.state.userPass}
          userType={this.state.userType}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
          handleOptionChange={this.handleOptionChange}
        />
      </div>
    );
  }
}

export default Login;
