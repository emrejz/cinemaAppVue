<template>
  <div>
    <MovieCard v-for="movie in movies" :movie="movie" :key="movie.imdbID" />
  </div>
</template>

<script>
  import MovieCard from "./movieCard";
  import {mapGetters} from "vuex"
  export default {
    name: "MoviesPage",
    components: {
      MovieCard
    },
    computed:{
   ...mapGetters([
       "movies"
   ])
    },
    created() {
      this.$store.dispatch("getMovies");
    }
  };
</script>

<style></style>
