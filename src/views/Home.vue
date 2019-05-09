<template>
  <div>
    <v-container grid-list-md>
      <v-layout row wrap pb-4>
        <v-flex xs6>
          <div class="headline mb-2 font-weight-medium">Nuestra Empresa</div>
          <v-layout column>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, illo. Neque porro obcaecati delectus at beatae explicabo aperiam repudiandae illo totam atque rem similique blanditiis enim, ducimus odio culpa omnis?</p>
          </v-layout>
        </v-flex>
        <v-flex xs6>
          <v-layout column>
            <v-img :src="require('../assets/2.jpg')" aspect-ratio="1.7"></v-img>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12 sm3 v-for="categoria in categorias" :key="categoria.id">
          <ProductCard :categoria="categoria"/>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import { mapState } from "vuex";

export default {
  components: {
    ProductCard
  },
  computed: mapState({
    categorias: state => state.categorias
  })
};
</script>

<style scoped>
</style>