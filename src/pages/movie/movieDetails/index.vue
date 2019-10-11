<template>
  <div>asd</div>
</template>

<script>
  export default {
    name: "MovieDetail",
    computed: {
      movieID() {
        return this.$route.params.id;
      }
    },
    created() {
      this.$store.dispatch("getMovieDetails", this.movieID);
    }
  };
</script>

<style></style>
