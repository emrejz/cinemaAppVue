<template>
  <div id="app">
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<script>
  import NavBar from "./components/NavBar";
  export default {
    name: "App",
    components:{
      NavBar
    }
  };
</script>

<style>
  #app {
    font-family:monospace;
    font-size: 1.2rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    margin: 0px;
    padding: 0px;
    height: 100vh;
    width: 100vw;
  }
</style>
