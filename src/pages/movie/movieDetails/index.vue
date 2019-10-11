<template>
  <div class="container">
    <h1 class="errorMessage" v-if="error">{{ error }}</h1>
    <div v-if="isLoading">LOADING</div>
    <div v-if="!isLoading">{{ movie.title }}</div>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  export default {
    name: "MovieDetail",
    data() {
      return {
        isLoading: true
      };
    },
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
      this.$store.dispatch("getMovieDetails", this.movieID).then(res => {
        this.isLoading = false;
      });
    }
  };
</script>

<style>
  .errorMessage {
    margin-top: 20%;
    color: red;
  }
</style>
