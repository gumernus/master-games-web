<template>
<nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <!-- <a class="navbar-brand" href="#">MasterGames</a> -->
    <img class="navbar-brand" src="../assets/Master-Games.eu.png" alt="logo" height="50" width="120">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><router-link to="/">Home</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><router-link to="/novinky">Novinky</router-link></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Navbar',
});
</script>

<style scoped>


.navbar {
    padding: 10px;
    font-size: 17px;
}

a{
    text-decoration: none;
}
a.router-link-exact-active {
    font-weight: bold;
}

.navbar-light .navbar-toggler{
  border: none;
  color: black;
}

.navbar-toggler:focus{
  border: none !important;
  box-shadow: none !important;
}

</style>

