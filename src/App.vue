<template>
  <v-app>
    <NavBar/>
    <v-parallax dark :src="require('./assets/4.jpg')">
      <v-layout align-center column justify-center>
        <h1 class="display-2 font-weight-thin mb-3">
          <span class="font-weight-medium">Expertos</span> en Maderas
        </h1>
        <h4 class="subheading">Encuentra lo que necesitas para hacer tus proyectos</h4>
      </v-layout>
    </v-parallax>
    <v-content>
      <router-view/>
    </v-content>
    <Footer/>
  </v-app>
</template>


<script>
import Footer from "@/components/Footer.vue";
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    Footer,
    NavBar
  },
  name: "App",
  data() {
    return {
      //
    };
  }
};
</script>
