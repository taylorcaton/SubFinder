import axios from "axios";

export default {
  // Gets all substitutes
  getSubstitutes: function() {
    return axios.get("/api/substitutes");
  },
  // Gets the sub with the given id
  getSubstitute: function(id) {
    return axios.get("/api/substitutes/" + id);
  },
  // Deletes the sub with the given id
  deleteSubstitute: function(id) {
    return axios.delete("/api/substitutes/" + id);
  },
  createSubstitute: function(subObj) {
    console.log(`Calling the POST route to create a teacher ${subObj.name}`);
    return axios.post("/api/substitutes", subObj);
  },
  loginSubstitute: function(name) {
    console.log(
      `Calling on the post route for the sub login route: Looking for ${name}`
    );
    return axios.post("/api/substitutes/login/" + name);
  },
  findAndUpdateSubstituteByID: function(subObj) {
    console.log(
      `Calling on the Sub with id ${subObj._id}`
    );
    return axios.put("/api/substitutes/"+subObj._id, subObj);
  },
  loginTeacher: function(name) {
    console.log(
      `Calling on the post route for the teacher login route: Looking for ${name}`
    );
    return axios.post("/api/teachers/login/" + name);
  },
  // Gets the teacher with the given id
  getTeacher: function(id) {
    return axios.get("/api/teachers/" + id);
  },
  getAllTeachers: function() {
    console.log(`Calling the GET route to retrieve all available Teachers`);
    return axios.get("/api/teachers");
  },
  createTeacher: function(teacherObj) {
    console.log(`Calling the POST route to create a teacher ${teacherObj.name}`);
    return axios.post("/api/teachers", teacherObj);
  },
  deleteTeacher: function(id) {
    return axios.delete("/api/teachers/" + id);
  },
  findAndUpdateTeacherByID: function(teacherObj) {
    console.log(
      `Calling on the Teacher with id ${teacherObj._id}`
    );
    return axios.put("/api/teachers/"+teacherObj._id, teacherObj);
  },
  getAllJobs: function() {
    console.log(`Calling the GET route to retrieve all available Jobs`);
    return axios.get("/api/jobs");
  },
  findAndUpdateJobByID: function(id, subName) {
    console.log(
      `Calling on the Job with id ${id} and updating as taken by ${subName}`
    );
    return axios.post("/api/jobs/" + id + "/" + subName);
  },
  // Saves a job to the database
  saveJob: function(jobData) {
    console.log(`Calling on the saveJob Route with ${jobData.userName} & ${jobData.date}`)
    return axios.post("/api/jobs", jobData);
  },
  // Removes a job to the database
  removeJob: function(id) {
    console.log(`Calling on the removeJob Route with id: ${id}`)
    return axios.delete("/api/jobs/" + id);
  },
};
