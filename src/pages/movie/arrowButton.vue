<template>
  <button :class="setClass" @click="backMoviesPage"><</button>
</template>

<script>
  export default {
    props: {
      isLeft: {
        type: Boolean,
        required: true
      }
    },
    computed: {
      setClass() {
        if (this.isLeft) {
          return "arrow left";
        } else {
          return "arrow right";
        }
      }
    },
    methods: {
      backMoviesPage() {
        this.$router.back();
      }
    }
  };
</script>

<style>
  .left {
    left: -80px;
    text-align: end;
    padding-right: 10px;
  }
  .left:hover {
    left: -70px;
    transition: 0.3s linear;
  }
  .right {
    right: -170px;
    text-align: start;
    padding-left: 10px;
  }
  .right:hover {
    right: -160px;
    transition: 0.3s linear;
  }
  .arrow {
    position: absolute;
    top: 40%;
    width: 120px;
    font-size: 60px;
    height: 120px;
    border-radius: 60px;
    transition: 0.3s linear;
    color: white;
    background-color: rgba(0, 0, 0, 0.7);
  }
</style>
