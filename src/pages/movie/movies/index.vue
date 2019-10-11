<template>
  <div>
    <nav-bar/>
  <div class="container">
    <h1 class="errorMessage" v-if="error">{{error}}</h1>
    <MovieCard v-for="(movie,index) in movies" :movie="movie" :index="index" :key="movie.id" />
  </div>
  </div>
</template>

<script>
  import MovieCard from "../movieCard";
  import NavBar from "../../../components/navBar";
  import {mapGetters} from "vuex"
  export default {
    name: "MoviesPage",
    components: {
      MovieCard,
      NavBar
    },
    computed:{
   ...mapGetters([
       "movies",
       "error"
   ])
    },
    created() {
      this.$store.dispatch("getMovies");
    }
  };
</script>
<style>
.container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 24px;
}
.errorMessage{
  margin-top: 20%;
  color: red;

}
</style>
