import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import UserPass from "../../components/UserPass";
import API from "../../utils/API";

class Login extends Component {
  state = {
    userName: "",
    userPass: "",
    userType: "",
    invalidLogin: false
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(`Name: ${name}, Value: ${value} passed`);
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {

    console.log(
      `Server is looking for a ${this.state.userType} named ${this.state
        .userName} using ${this.state.userPass}`
    );

    if (
      this.state.userName &&
      this.state.userPass &&
      this.state.userType === "Sub"
    ) {
      API.loginSubstitute(this.state.userName).then(res => {
        // console.log(res.data[0].password);
        if (
          res.data.length > 0 &&
          res.data[0].password === this.state.userPass
        ) {
          this.setState({ invalidLogin: false });
          console.log("USER VERIFIED");
          this.props.history.push({pathname: '/sub', state: {userName: this.state.userName}});

          // this.props.history.push('/sub')
          // window.location = '/sub';
        } else {
          this.setState({ invalidLogin: true });
          console.log("INVALID USER NAME OR PASSWORD");
        }
      });
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
          invalidLogin={this.state.invalidLogin}
        />
      </div>
    );
  }
}

export default Login;
