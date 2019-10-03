import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import routerOpt from "./router";
import storeOpt from "./stories/store";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store(storeOpt);
const router = new VueRouter(routerOpt);
new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
