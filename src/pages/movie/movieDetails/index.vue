<template>
  <div class="container">
    <h1 class="errorMessage" v-if="error">{{ error }}</h1>
    <div v-if="movie">{{ movie.title }}</div>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  export default {
    name: "MovieDetail",
    computed: {
      movieID() {
        return this.$route.params.id;
      },
      movie() {
        return this.$store.state.movieDetailList[this.movieID];
      },
      error() {
        return this.$store.state.error;
      }
    },
    created() {
      this.$store.dispatch("getMovieDetails", this.movieID);
    }
  };
</script>

<style>
  .errorMessage {
    margin-top: 20%;
    color: red;
  }
</style>
