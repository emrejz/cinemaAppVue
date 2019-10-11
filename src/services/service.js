import axios from "axios";
let url =
  "https://api.themoviedb.org/3/movie/upcoming?page=1&language=en-US&api_key=" +
  process.env.VUE_APP_API_KEY;
export default {
  getMovies() {
    return axios.get(url);
  }
};
