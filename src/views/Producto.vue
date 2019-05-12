<template>
  <div>
    <ProductList :items="items"/>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
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