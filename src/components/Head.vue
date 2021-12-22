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
border-radius: 20px;    
margin: 50px;
padding: 30px;
background-color: #e9ecef;
white-space: pre-wrap;
}
h1{

    text-align: center;
    font-weight: bold;
}
</style>

