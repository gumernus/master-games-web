<template>
<div class="bg-image"></div>
  <div class="container-fluid">
<div class="px-4 py-5 my-5 text-center">
    <h1 class="display-5 fw-bold">Master Games</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">Československý Minecraftový server se skvělými minihrami a ještě lepší komunitou lidí.</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Přihlásit se</button>
        <button type="button" class="btn btn-secondary btn-lg px-4">Zaregistrovat se</button>
      </div>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Hero',
});
</script>

<style scoped>
.bg-image{
  z-index: -2;
  filter: blur(3px);
  position: absolute;
  width: 100%;
  height: 100%;
    background-image: url("../assets/lobby.png");
}
.container-fluid{
    height: 92vh;
    color:aliceblue;
}

.display-5{
    padding-top: 120px;
}
</style>

