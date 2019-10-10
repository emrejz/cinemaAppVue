import Home from "./pages/home";
import Movies from "./pages/movie/movies";

export default {
  mode: "history",
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/movies", name: "movies", component: Movies },
    { path: "*", redirect: { name: "home" } }
  ]
};
