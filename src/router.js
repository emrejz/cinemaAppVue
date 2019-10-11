//import Home from "./pages/home";
import Movies from "./pages/movie/movies/";
import MovieDetails from "./pages/movie/movieDetails/";

export default {
  mode: "history",
  routes: [
    // { path: "/", name: "home", component: Home },
    { path: "/movies", name: "movies", component: Movies },
    { path: "/movie/:id", name: "movieDetails", component: MovieDetails },
    { path: "*", redirect: { name: "movies" } }
  ]
};
