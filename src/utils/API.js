import axios from "axios";

const BASEURL = "https://randomuser.me/api/"; // PUBLIC
// const BASEURL = "http://localhost:5000/api/"; // LOCAL
const query = "?results=20&nat=us"; //https://randomuser.me/api/?results=200&nat=us

export default {
  search: function() {
    return axios.get(BASEURL + query);
  }
};

