<template>
<Head headers="Nábor Helper"></Head>

<Article headers="Otevření serveru pro veřejnost" texts="Vážení hráči🙋‍♂‍, Vážené hráčky🙋‍♀‍,
dne 11.12.2021 v sobotu se otevře náš server pro veřejnost. Děkujeme Vám, že jste tak dlouho vyčkali a doufáme, že si hraní na našem serveru užijete."></Article>
  <Footer></Footer>
</template>
<script lang="ts">
import Head from "@/components/Head.vue"
import Article from "@/components/Article.vue"
import Footer from "@/components/Footer.vue";

export default {
  name: "Helper",
  components: {
    Head,
    Article,
    Footer,
  },
  watch: {
    $route: {
      immediate: true,
      handler(to: any, from: AnalyserNode) {
        document.title = "MasterGames | Nábor Helper";
      },
    },
  },
};
</script>

<style scoped>

</style>