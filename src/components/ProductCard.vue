<template>
  <div>
    <v-card>
      <v-img :src="categoria.imagen" height="200px"></v-img>
      <v-card-title primary-title>
        <div>
          <div class="headline text-uppercase">{{ categoria.nombre }}</div>
          <span class="grey--text">1,000 miles of wonder</span>
        </div>
      </v-card-title>

      <v-card-actions>
        <v-btn flat>Share</v-btn>
        <v-btn flat color="purple">Ver más</v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    categoria: Object
  }
};
</script>

<style scoped>
</style>