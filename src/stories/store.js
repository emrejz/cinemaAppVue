import service from "../services/service";
const state = {
  movies: [],
  error: ""
};
const getters = {
  movies(state) {
    return state.movies;
  }
};
const mutations = {
  setMovies(state, val) {
    state.movies = val;
  },
  setError(state, val) {
    state.error = val;
  }
};
const actions = {
  getMovies(context) {
    service
      .getMovies()
      .then(res => {
        if (res.data.Response === "True") {
          context.commit("setMovies", res.data.Search);
        } else {
          context.commit("setError", res.data.error);
        }
      })
      .catch(() => {
        context.commit("setError", "Service error!");
      });
  }
};
export default {
  state,
  getters,
  mutations,
  actions
};
