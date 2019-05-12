<template>
  <div>
    <About/>

    <Offer/>

    <ProductList :items="items">
      <span slot="subtitle">Categorias</span>
    </ProductList>

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
    items: state => state.categorias
  })
};
</script>

<style scoped>
</style>