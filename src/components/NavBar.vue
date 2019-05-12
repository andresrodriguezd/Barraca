<template>
  <div>
    <v-toolbar app color="amber accent-2">
      <v-flex lg3>
        <v-img :src="require('../assets/logo.png')" class="my-3" contain height="105"></v-img>
      </v-flex>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/" exact>Home</v-btn>
        <v-btn flat to="/producto" exact>Producto</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>