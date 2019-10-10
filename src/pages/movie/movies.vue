<template>
  <div>
    <MovieCard></MovieCard>
  </div>
</template>

<script>
  import MovieCard from "./movieCard";
  export default {
    name: "MoviesPage",
    components: {
      MovieCard
    },
    created() {
      this.$store.dispatch("getMovies");
    }
  };
</script>

<style></style>
