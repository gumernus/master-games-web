<template>
<div class="article-box">
<h3>{{ header }}</h3>
<p>{{ text }}</p>
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Article",
  props: ["headers", "texts"],
  data() {
  return {
    header: this.headers,
    text: this.texts,
  }
}
});
</script>

<style scoped>
.article-box{
border-radius: 20px;
margin: 50px;
padding: 30px;
padding-left: 50px;
background-color: #e9ecef;
white-space: pre-wrap;
}
h3{ 
    font-weight: bold;
}

p{
    width: 80%;
}

@media only screen and (max-width: 600px) {
  p{
    width: 100%;
}
}


</style>

