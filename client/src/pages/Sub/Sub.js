import React, { Component } from "react";
import Nav from "../../components/Nav";
import API from "../../utils/API";

class Sub extends Component {
  
  render() {
    return (
      <div>
        <Nav />
        <div>
          <h1 className='text-center text-capitalize text-warning'>
            This is the Sub Page
          </h1>
        </div>
      </div>
    );
  }
}

export default Sub;
