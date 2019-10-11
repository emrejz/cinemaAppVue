import service from "../services/service";
const state = {
  movies: [],
  error: ""
};
const getters = {
  movies(state) {
    return state.movies;
  },
  error(state) {
    return state.error;
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
    context.commit("setError", "");
    service
      .getMovies()
      .then(res => {
        const { results } = res.data;
        if (results.length > 0) {
          context.commit("setMovies", results);
        } else {
          context.commit("setError", "Movies not found!");
        }
      })
      .catch(() => {
        context.commit("setError", "Service error!");
      });
  },
  getMovieDetails(context, id) {
    service.getMovieDetails(id).then(res => {
      console.log(res);
    });
  }
};
export default {
  state,
  getters,
  mutations,
  actions
};
