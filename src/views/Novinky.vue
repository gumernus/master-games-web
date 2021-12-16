<template>
    <div class="footer-border"></div>
  <Footer></Footer>
</template>

<script lang="ts">
import Footer from "@/components/Footer.vue";

export default {
  name: "Novinky",
  components: {
    Footer,
  },
  watch: {
    $route: {
      immediate: true,
      handler(to: any, from: AnalyserNode) {
        document.title = "MasterGames | About";
      },
    },
  },
};
</script>

<style scoped>
.footer-border{
    padding: 100px;
}
</style>