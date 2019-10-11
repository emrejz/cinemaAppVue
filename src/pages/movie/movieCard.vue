<template>
  <router-link :to="detailPath">
    <div class="card">
      <poster-image
        :posterPath="movie.poster_path"
        class="card-img-top"
        :alt="movie.title"
      />
      <div class="card-body">
        <h5 class="card-title">{{ movie.title }}</h5>
        <p class="card-text">{{ movie.overview }}</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Release Date: {{ movie.release_date }}</small>
      </div>
    </div>
  </router-link>
</template>

<script>
  import PosterImage from "./posterImage" 
  export default {
    name: "MovieCard",
    components:{
      PosterImage
    },
    props: {
      movie: {
        type: Object,
        required: true
      },
      index:{
        type:Number,
        required:true
      }
    },
    computed: {
      detailPath() {
        return "/movie/" + this.movie.id;
      }
    }
  };
</script>

<style>
  .card {
    margin: 10px;
    width: 220px;
    height: 510px;
    text-align: center;
  }
  .card-img-top {
    height: 220px;
  }
  .card-body {
    height: 236px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: column;
  }
  .text-muted {
    font-weight: bold;
  }
  .card-footer {
    height: 40px;
  }
  .card-text {
    flex: 1;
    padding-right: 4px;
    overflow: hidden;
  }
  .card-text::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
  }

  .card-text::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
  }

  .card-text::-webkit-scrollbar-thumb {
    background-color: #0ae;
    background-image: -webkit-gradient(
      linear,
      0 0,
      0 100%,
      color-stop(0.5, rgba(255, 255, 255, 0.2)),
      color-stop(0.5, transparent),
      to(transparent)
    );
  }

  .card-text:hover {
    height: 300px;
    z-index: 10;
    flex: 3;
    scrollbar-width: 1px;
    overflow: auto;
  }
  .card-title {
    overflow: hidden;
    height: 48px;
  }
  a {
    text-decoration: none !important;
    color: inherit !important;
  }
</style>
