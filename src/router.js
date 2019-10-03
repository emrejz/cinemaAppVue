import Home from "./pages/home";

export default {
  mode: "history",
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "*", redirect: { name: "home" } }
  ]
};
