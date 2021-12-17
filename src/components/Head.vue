<template>
<div class="article-box">
<h1>{{ header }}</h1>
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Head",
  props: ["headers"],
  data() {
  return {
    header: this.headers,
      }
}
});
</script>

<style scoped>
.article-box{
 box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 17px;
border-radius: 20px;    
margin: 50px;
padding: 30px;
background-color: #f8f9fa;
white-space: pre-wrap;
}
h1{

    text-align: center;
    font-weight: bold;
}
</style>

