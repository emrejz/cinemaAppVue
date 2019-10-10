<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/"><div class="navbar-brand">Navbar</div></router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/movies" activ>
            <div class="nav-link">Movies</div>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "NavBar"
  };
</script>
<style></style>
