<template>
<div style="padding-bottom: 70px;"></div>
<Navbar></Navbar>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/components/Navbar.vue"

export default {
  name: "App",
  components: {
    Navbar
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.form-control:focus{
  box-shadow: none !important;
}

.btn-primary:focus, .btn-secondary:focus{
  box-shadow: none !important;
}

.btn-primary{
  color:white !important;
  background: #0077b3 !important; 
}

.btn-primary:hover{
  color:white !important;
  background: #0098b3 !important; 
}

.btn-secondary{
  color:black !important;
  background: #ebebeb !important; 
}

.btn-secondary:hover{
  color:black !important;
  background: #ffffff !important; 
}

a:hover{
  text-decoration: underline !important;
}

</style>
