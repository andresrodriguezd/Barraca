<template>
  <div>
    <v-card>
      <v-img :src="getImagen" height="200px"></v-img>
      <v-card-title primary-title>
        <div>
          <div class="headline text-uppercase">{{ titulo }}</div>

          <span class="grey--text">1,000 miles of wonder</span>
        </div>
      </v-card-title>

      <v-card-actions>
        <v-flex xs4 offset-xs8>
          <v-btn to="/producto" class="orange lighten-2 white--text">Ver más</v-btn>
        </v-flex>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
  computed: {
    titulo() {
      if (this.item.nombre !== undefined) {
        return this.item.nombre;
      } else {
        return this.item.medida + " " + this.item.caracteristica;
      }
    },
    getImagen() {
      return require("@/assets/" + this.item.imagen);
    }
  }
};
</script>

<style scoped>
</style>