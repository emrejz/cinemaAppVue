<template>
  <div class="hello">
    Home
  </div>
</template>

<script>
  export default {
    name: "Home",
    props: {
      msg: String
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    width: 300px;
    height: 300px;
    background-color: red;
  }
</style>
