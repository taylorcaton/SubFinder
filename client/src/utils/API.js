import axios from "axios";

export default {
  // Gets all books
  getSubstitutes: function() {
    return axios.get("/api/substitutes");
  },
  // Gets the book with the given id
  getSubstitute: function(id) {
    return axios.get("/api/substitutes/" + id);
  },
  // Deletes the book with the given id
  deleteSubstitute: function(id) {
    return axios.delete("/api/substitutes/" + id);
  },
  // Saves a book to the database
  saveSubstitute: function(bookData) {
    return axios.post("/api/substitutes", bookData);
  },
  loginSubstitute: function(name) {
    console.log(`Calling on the post route for the sub login route: Looking for ${name}`)
    return axios.post("/api/substitutes/login/" + name)
  }
};