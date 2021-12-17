<template>

<Head headers="Store"></Head>

<Article headers="Informace o VIP" texts="Kredity jsou virtuální měnou serveru a slouží výhradně k zakoupení výhod na našem serveru.
Jestliže se Vám kredity do 10 minut nepřičtou na váš účet neváhejte nás kontaktovat pomocí emailu.
Nákup kreditů je nevratný a server nezodpovídá za špatné zakoupení.
Pokud by byl server zrušen hráč nebude mít nárok na žádný druh kompenzace."></Article>
  <Footer></Footer>
</template>
<script lang="ts">
import Head from "@/components/Head.vue"
import Article from "@/components/Article.vue"
import Footer from "@/components/Footer.vue";

export default {
  name: "Novinky",
  components: {
    Head,
    Article,
    Footer,
  },
  watch: {
    $route: {
      immediate: true,
      handler(to: any, from: AnalyserNode) {
        document.title = "MasterGames | Store";
      },
    },
  },
};
</script>

<style scoped>

</style>