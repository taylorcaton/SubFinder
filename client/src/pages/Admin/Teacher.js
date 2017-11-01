import React, { Component } from "react";
import Nav from "../../components/Nav";
import API from "../../utils/API"; 

class Admin extends Component {
  state = {
    date: new Date().getTime(),
  };

  componentDidMount() {

  }

  handleSubmit = event => {

  };

  render() {
    return (
      <div>
        <Nav />
        
      </div>
    );
  }
}

export default Admin;
