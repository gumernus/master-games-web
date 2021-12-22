<template>
  <!-- Footer -->
  <footer class="bg-light text-center text-lg-start">
    <!-- Grid container -->
    <div class="container p-4">
      <!-- Section: Form -->
      <section class="">
        <form action="">
          <!--Grid row-->
          <div class="row d-flex justify-content-center">
            <!--Grid column-->
            <div class="col-auto">
              <p class="pt-2">
                <strong>Máte zájem s námi spolupracovat? </strong>
              </p>
            </div>
            <!--Grid column-->

            <!--Grid column-->
            <div class="col-md-5 col-12">
              <!-- Email input -->
              <div class="form-outline mb-4">
                <input
                  type="email"
                  id="form5Example2"
                  class="form-control"
                  placeholder="Emailová adresa"
                />
              </div>
            </div>
            <!--Grid column-->

            <!--Grid column-->
            <div class="col-auto">
              <!-- Submit button -->
              <button type="submit" class="btn btn-primary mb-4">
                Odeslat
              </button>
            </div>
            <!--Grid column-->
          </div>
          <!--Grid row-->
        </form>
      </section>
      <!-- Section: Form -->

      <!-- Section: Links -->
      <section class="">
        <!--Grid row-->
        <div class="row">
                      <!--Grid column-->
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5>Stránky</h5>

            <ul class="list-unstyled mb-0">
              <li>
                <a href="#!" class="text-dark">Home</a>
              </li>
              <li>
                <a href="#!" class="text-dark">Novinky</a>
              </li>
              <li>
                <a href="#!" class="text-dark">Pravidla</a>
              </li>
              <li>
                <a href="#!" class="text-dark">Nábory</a>
              </li>
              <li>
                <a href="#!" class="text-dark">Kontakty</a>
              </li>
            </ul>
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5>Sociální sítě</h5>

            <ul class="list-unstyled mb-0">
              <li>
                <a href="https://discord.master-games.eu/" class="text-dark">Discord</a>
              </li>
              <li>
                <a href="http://invite.teamspeak.com/ts3.master-games.eu" class="text-dark">Teamspeak</a>
              </li>
              <li>
                <a href="https://www.instagram.com/mastergames.eu/" class="text-dark">Instagram</a>
              </li>
            </ul>
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5>Podpořte nás</h5>

            <ul class="list-unstyled mb-0">
              <li>
                <a href="https://panel.batcore.eu/shop/MG/Credits" class="text-dark"
                  >Store</a
                >
              </li>
              <li>
                <a
                  href="https://craftlist.org/master-games-eu"
                  class="text-dark"
                  >Craftlist</a
                >
              </li>
              <li>
                <a
                  href="https://czech-craft.eu/server/master-games-eu/"
                  class="text-dark"
                  >Czechcraft</a
                >
              </li>
              <li>
                <a
                  href="https://nicelist.eu/server/mastergames"
                  class="text-dark"
                  >Nicelist</a
                >
              </li>
            </ul>
          </div>

        </div>
        <!--Grid row-->
      </section>
      <!-- Section: Links -->
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: #ebe9e9">
      © 2022
      <a class="text-dark" href="https:/master-games.eu/"
        >MasterGames.eu
      </a>
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
});
</script>

<style scoped>
.col-lg-3 a{
    text-decoration: none;
}

footer{
background-color: #e9ecef;
}
</style>

