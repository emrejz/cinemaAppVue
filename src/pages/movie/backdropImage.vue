<template>
  <img class="backDropImage" :src="imagePath" />
</template>

<script>
  export default {
    props: {
      imageDropPath: {
        type: String,
        required: true
      }
    },
    computed: {
      imagePath() {
        return `https://image.tmdb.org/t/p/w1280${this.imageDropPath}`;
      }
    }
  };
</script>

<style>
  .backDropImage {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    filter: blur(30px);
    transform: scale(1.1);
  }
</style>
