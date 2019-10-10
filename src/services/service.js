import axios from "axios";
let url =
  "http://www.omdbapi.com/?s=game&type=movie&page=1&apikey=" +
  process.env.VUE_APP_API_KEY;
export default {
  getMovies() {
    return axios.get(url);
  }
};
