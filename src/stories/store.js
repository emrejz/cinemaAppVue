import service from "../services/service";
const state = {
  movies: [],
  error: "",
  movieDetailList: {}
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
  },
  setMovieDetail(state, val) {
    const { id, movie } = val;
    state.movieDetailList[id] = movie;
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
    if (!context.state.movieDetailList[id]) {
      context.commit("setError", "");
      return service
        .getMovieDetails(id)
        .then(res => {
          const { data } = res;
          context.commit("setMovieDetail", { id: data.id, movie: data });
        })
        .catch(() => context.commit("setError", "Service error!"));
    }
  }
};
export default {
  state,
  getters,
  mutations,
  actions
};
