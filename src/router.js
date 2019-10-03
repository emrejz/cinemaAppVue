import Home from "./pages/home";
import VueRouter from "vue-router";

export default new VueRouter({
  mode: "history",
  routes: [
    { path: "/a", name: "home", component: Home },
    { path: "*", redirect: { name: "home" } }
  ]
});
