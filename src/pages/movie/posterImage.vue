<template>
  <img  :src="imagePath" />
</template>

<script>
  export default {
    props: {
      posterPath: {
        type: String,
        required: true
      }
    },
    computed: {
      imagePath() {
        return `https://image.tmdb.org/t/p/w1280${this.posterPath}`;
      }
    }
  };
</script>

<style>
 
