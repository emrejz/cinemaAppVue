<template>
  <img class="posterImg" :src="imagePath" />
</template>

<script>
  export default {
    props: {
      posterPath: {
        type: String
      },
      castPath: {
        type: String
      },
      thumbnailUrl: {
        type: String
      }
    },
    methods: {
      finalPath() {
        if (this.posterPath)
          return `https://image.tmdb.org/t/p/w1280${this.posterPath}`;
        if (this.castPath)
          return `https://image.tmdb.org/t/p/w45${this.castPath}`;
        if (this.thumbnailUrl) return this.thumbnailUrl;
      }
    },
    computed: {
      imagePath() {
        return this.finalPath();
      }
    }
  };
</script>

<style>
  .posterImg {
    width: 100%;
  }
</style>
