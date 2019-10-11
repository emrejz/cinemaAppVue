<template>
  <div class="container">
    <h1 class="errorMessage" v-if="error">{{ error }}</h1>
    <div v-if="isLoading">LOADING</div>
    <backdrop-image v-if="!isLoading" :imageDropPath="movie.backdrop_path"/>
      <div style="font-size: 100px;" v-if="!isLoading">{{ movie.title }}</div>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  import BackdropImage from "../backdropImage";
  export default {
    name: "MovieDetail",
    data() {
      return {
        isLoading: true
      };
    },
    components: {
      BackdropImage
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
