<template>
    <Head headers="Pravidla Minecraft"></Head>
    <div class="row">
      <div class="col">
        <ul>
          <li>
            <a>Úvod</a>
          </li>
          <li>
            <a>Úpravy klienta</a>
          </li>
          <li>
            <a>Estetické modifikace</a>
          </li>
          <li>
            <a>Kosmetické HUD</a>
          </li>
        </ul>
      </div>
      <div class="col lol">
        <Article
          headers="Úvod"
          texts="Vítejte na serveru Master-Games, kde je pro nás prioritou vaše spokojenost a zábava při hraní. Snažte se na serveru chovat s respektem k ostatním hráčům, je třeba si uvědomit, že zde jsou i mladší hráči, tudíž je zakázáno používání jakýchkoli vulgarit, rasistických narážek, zveřejňování osobních informací a podobně. Hráč, který se připojí na server Master-Games.eu automaticky souhlasí s těmito pravidly a podmínkami. Za jejich případné porušení, bude hráč náležitě potrestán dle banovacího systému, nebo rozhodnutí člena A-Teamu."
        ></Article>

        <Article
          headers="Úpravy klienta"
          texts="Modifikace, které se jednoduše snaží zlepšit výkon klienta Minecraft bez provádění ulehčujících změn v samotné hře, jako je plynulost klienta hry Minecraft. (FPS)"
        ></Article>

        <Article
          headers="Estetické modifikace"
          texts="Modifikace, které se jednoduše snaží zlepšit výkon klienta Minecraft bez provádění ulehčujících změn v samotné hře, jako je plynulost klienta hry Minecraft. (FPS)"
        ></Article>

        <Article
          headers="Kosmetické HUD"
          texts="Modifikace, které se jednoduše snaží zlepšit výkon klienta Minecraft bez provádění ulehčujících změn v samotné hře, jako je plynulost klienta hry Minecraft. (FPS)"
        ></Article>
      </div>
    </div>
    <Footer></Footer>
</template>
<script lang="ts">
import Head from "@/components/Head.vue";
import Article from "@/components/Article.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Pravidla Minecraft",
  components: {
    Head,
    Article,
    Footer,
  },
  watch: {
    $route: {
      immediate: true,
      handler(to: any, from: AnalyserNode) {
        document.title = "MasterGames | Pravidla Minecraft";
      },
    },
  },
};
</script>

<style scoped>
.row{
  margin: 50px;
  margin-bottom: 0;
}

.col {
  height: fit-content;
  max-width: 260px !important;
  border-radius: 20px;
  margin: 0px;
  padding: 30px;
  padding-left: 50px;
  padding-right: 50px;
  background-color: #e9ecef;
}

.col a {
  text-align: left;
  font-size: 17px;
  color: #0d6efd !important;
}

.lol {
  margin-left: 0px;
  max-width: 100000px !important;
  background-color: white;
  padding: 0;
  border-radius: 0;
}

ul {
  padding-left: 0;
}

li {
  margin: 0 auto;
  list-style-type: none;
  margin-bottom: 10px;
}

.article-box {
  margin-top: 0;
  margin-right: 0;
}
</style>
