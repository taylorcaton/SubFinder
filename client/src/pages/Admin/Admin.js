import React, { Component } from "react";
import Nav from "../../components/Nav";
import ListJobs from "../../components/ListJobs_ADMIN";
import ListTeachers from "../../components/ListTeachers_ADMIN";
import ListSubs from "../../components/ListSubs_ADMIN";
import API from "../../utils/API";
import Modal from "reboron/OutlineModal";

const modalStyle = {
  width: "70%"
};

class Admin extends Component {
  state = {
    jobs: [],
    teachers: [],
    subs: [],
    date: new Date().getTime(),
    editObj: {},
    editType: ""
  };

  showModal = (type, id) => {
    if (type === "Teacher") {
      API.getTeacher(id).then(res => {
        this.setState({ editObj: res.data });
        this.setState({ editType: type });
        this.refs.modal.show();
      });
    }else if(type === "Sub"){
      API.getSubstitute(id).then(res => {
        this.setState({ editObj: res.data });
        this.setState({ editType: type });
        this.refs.modal.show();
      })
    }
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(`Name: ${name}, Value: ${value} passed`);
    let newState = this.state.editObj;
    newState[name] = value;
    this.setState({editObj: newState});
  };

  hideModal = () => {
    this.refs.modal.hide();
  };

  callback(evt) {
    console.log(evt);
  }

  componentDidMount() {
    this.loadJobs();
    this.loadTeachers();
    this.loadSubs();
  }

  loadJobs = () => {
    API.getAllJobs().then(res => {
      this.setState({ jobs: res.data });
    });
  };

  loadTeachers = () => {
    API.getAllTeachers().then(res => {
      this.setState({ teachers: res.data });
    });
  };

  loadSubs = () => {
    API.getSubstitutes().then(res => {
      this.setState({ subs: res.data });
    });
  };

  handleRemoveJob = id => {
    API.removeJob(id).then(res => {
      this.loadJobs();
    });
  };

  handleSubmit = event => {};

  render() {
    return (
      <div>
        <Nav />
        <div>
          <div className="container">
            <div role="tabpanel">
              <div className="panel with-nav-tabs panel-default">
                <div className="panel-heading">
                  <ul className="nav nav-tabs nav-justified">
                    <li className="active">
                      <a href="#tab1default" data-toggle="tab">
                        <h4>Jobs</h4>
                      </a>
                    </li>
                    <li>
                      <a href="#tab2default" data-toggle="tab">
                        <h4>Teachers</h4>
                      </a>
                    </li>
                    <li>
                      <a href="#tab3default" data-toggle="tab">
                        <h4>Substitutes</h4>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="panel-body">
                  <div className="tab-content">
                    <div className="tab-pane fade in active" id="tab1default">
                      <ListJobs
                        jobs={this.state.jobs}
                        handleRemoveJob={this.handleRemoveJob}
                      />
                    </div>
                    <div className="tab-pane fade" id="tab2default">
                      <ListTeachers
                        teachers={this.state.teachers}
                        showModal={this.showModal}
                      />
                    </div>
                    <div className="tab-pane fade" id="tab3default">
                      <ListSubs
                        subs={this.state.subs}
                        showModal={this.showModal}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal ref={"modal"} modalStyle={modalStyle}>
          <div className="container modal-container">
            <div className="row">
              <div className="col-sm-12">
                <div className="input-group input-group-lg">
                  <span className="input-group-addon" id="basic-addon1">
                    Name
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.editObj.name}
                    name= "name"
                    aria-describedby="basic-addon1"
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="input-group input-group-lg">
                  <span className="input-group-addon" id="basic-addon1">
                    Phone Number
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.editObj.phonenum}
                    name="phonenum"
                    aria-describedby="basic-addon1"
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="input-group input-group-lg">
                  <span className="input-group-addon" id="basic-addon1">
                    Password
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    name="password"
                    value={this.state.editObj.password}
                    aria-describedby="basic-addon1"
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="btn-group" role="group" aria-label="...">
                  <button
                    className="btn btn-success btn-lg"
                    onClick={() => this.saveInfo()}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger btn-lg"
                    onClick={() => this.hideModal()}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Admin;
