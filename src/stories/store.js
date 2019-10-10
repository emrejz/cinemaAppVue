import service from "../services/service";
const state = {};
const getters = {};
const mutations = {};
const actions = {
  getMovies() {
    service.getMovies().then(res => console.log(res));
  }
};
export default {
  state,
  getters,
  mutations,
  actions
};
