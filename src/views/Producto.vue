<template>
  <div>
    <v-container grid-list-md>
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
import { mapState, mapActions } from "vuex";

export default {
  created() {
    this.fetchProducts();
  },
  components: {
    ProductCard
  },
  computed: mapState({
    categorias: state => state.product.products
  }),
  methods: mapActions("product", ["fetchProducts"])
};
</script>

<style scoped>
</style>