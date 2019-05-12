<template>
  <div>
    <About/>

    <Offer/>

    <ProductList/>

    <Subscribe/>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  components: {
    ProductCard: () => import("@/components/ProductCard"),
    Subscribe: () => import("@/components/Subscribe"),
    Offer: () => import("@/components/Offer"),
    About: () => import("@/components/About"),
    ProductList: () => import("@/components/ProductList")
  },
  computed: mapState({
    categorias: state => state.categorias
  })
};
</script>

<style scoped>
</style>