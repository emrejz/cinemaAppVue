<template>
  <router-link :to="movie.imdbID">
    <div class="card">
      <img :src="movie.Poster" class="card-img-top" :alt="movie.Title" />
      <div class="card-body">
        <h5 class="card-title">{{ movie.Title }}</h5>
        <p class="card-text">Year: {{ movie.Year }}</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Type: {{ movie.Type }}</small>
      </div>
    </div>
  </router-link>
</template>

<script>
  export default {
    name: "MovieCard",
    props: {
      movie: {
        type: Object,
        required: true
      }
    }
  };
</script>

<style>
  .card {
    margin: 10px;
    width: 220px;
    height: 400px;
    text-align: center;
  }
  .card-img-top {
    height: 220px;
  }
  .text-muted {
    font-weight: bold;
  }
  a {
    color: inherit !important;
  }
</style>
