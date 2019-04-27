<template>
  <v-app>
    <v-toolbar app color="grey lighten-3">
      <v-img :src="require('./assets/logo.png')" class="my-3" contain height="60"></v-img>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Link One</v-btn>
        <v-btn flat>Link Two</v-btn>
        <v-btn flat>Link Three</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer dark height="auto">
      <v-card class="flex" flat tile>
        <v-card-title class="amber accent-4">
          <strong class="subheading">Design and Developed by</strong>

          <v-spacer></v-spacer>

          <strong class="subheading">Andrés Rodríguez</strong>
        </v-card-title>

        <v-card-actions class="grey darken-4 justify-center">
          &copy;2019 —
          <strong>Vuetify</strong>
        </v-card-actions>
      </v-card>
    </v-footer>
  </v-app>
</template>


<script>
export default {
  name: "App",
  data() {
    return {
      //
    };
  }
};
</script>
