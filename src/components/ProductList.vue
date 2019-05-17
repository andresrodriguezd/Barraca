<template>
  <div>
    <v-flex xs12 class="my-3" align-center>
      <div class="text-xs-center">
        <h2 class="headline font-weight-medium">Productos</h2>
        <span class="subheading font-weight-medium grey-darken-1--text">
          <slot name="subtitle"></slot>
        </span>
      </div>
    </v-flex>
    <v-container grid-list-lg pb-5>
      <v-layout row wrap>
        <v-flex xs12 sm3 v-for="item in items" :key="item.id">
          <ProductCard :item="item" :url="url">
            <span slot="btnLabel">{{ btnLabel }}</span>
          </ProductCard>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
    btnLabel: {
      default: "Ver más",
      type: String
    },
    url: String
  },
  components: {
    ProductCard: () => import("@/components/ProductCard.vue")
  }
};
</script>

<style scoped>
</style>