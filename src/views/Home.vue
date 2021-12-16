<template>
<Hero></Hero>
<Footer></Footer>
</template>

<script lang="ts">

import Hero from "@/components/Hero.vue"
import Footer from "@/components/Footer.vue"

export default {
    name: 'Home',
    components: {
      Hero,
      Footer
    },
    watch: {
        $route: {
            immediate: true,
            handler(to:any, from:any) {
                document.title = 'MasterGames | Home';
            }
        },
    }
};

</script>

<style scoped>
a:hover{
    text-decoration: none !important;
}
</style>