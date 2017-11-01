import React, { Component } from "react";
import Nav from "../../components/Nav";
import ListJobs from "../../components/ListJobs_ADMIN";
import ListTeachers from "../../components/ListTeachers_ADMIN";
import ListSubs from "../../components/ListSubs_ADMIN";
import API from "../../utils/API";

class Admin extends Component {
  state = {
    jobs: [],
    teachers: [],
    subs: [],
    date: new Date().getTime()
  };

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
    })
  }

  loadSubs = () => {
    API.getSubstitutes().then(res => {
      this.setState({ subs: res.data });
    })
  }

  handleRemoveJob = id => {
    API.removeJob(id).then(res => {
      this.loadJobs();
    })
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
                      />
                    </div>
                    <div className="tab-pane fade" id="tab3default">
                      <ListSubs 
                        subs={this.state.subs}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
