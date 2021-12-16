<template>
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

.btn-primary{
  color:white;
  background: #0077b3; 
}

.btn-primary:hover{
  background: #0098b3; 
}

.btn-secondary{
  color:black;
  background: #ebebeb; 
}

.btn-secondary:hover{
  color:black;
  background: #ffffff; 
}

.btn :focus{
  box-shadow: none !important;
}

.form-control:focus{
  box-shadow: none !important;
}

a:hover{
  text-decoration: underline !important;
}

</style>
