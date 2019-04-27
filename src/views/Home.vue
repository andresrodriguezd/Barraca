<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex v-for="categoria in categorias" :key="categoria.nombre" xs12 sm3>
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
            <v-btn flat color="purple">Explore</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState({
    categorias: state => state.categorias
  })
};
</script>

<style scoped>
</style>