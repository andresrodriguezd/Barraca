<template>
  <v-app>
    <NavBar/>
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
