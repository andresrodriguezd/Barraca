<template>
  <div>
    <ProductList :items="items" :btnLabel="label" :url="url"/>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      label: "Ver Ficha",
      url: "detalle"
    };
  },
  created() {
    this.fetchProducts();
  },
  components: {
    ProductList: () => import("@/components/ProductList")
  },
  computed: mapState({
    items: state => state.product.products
  }),
  methods: mapActions("product", ["fetchProducts"])
};
</script>

<style scoped>
</style>