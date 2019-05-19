<template>
  <div>
    <v-container grid-list-md>
      <v-layout row wrap pb-4>
        <v-flex xs12 sm6 pr-5>
          <div class="headline mb-2 font-weight-medium">{{ titulo }}</div>
          <v-layout column>
            <p>{{ item.descripcion }}</p>
            <h2 class="red--text headline font-weight-medium">${{ item.precio }} C/U</h2>
          </v-layout>
        </v-flex>
        <v-flex xs12 sm6>
          <v-layout column>
            <v-img :src="getImagen" aspect-ratio="1.7"></v-img>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-expansion-panel v-model="panel" expand>
          <v-expansion-panel-content>
            <template v-slot:header>
              <div class="subheading font-weight-medium text-uppercase">Ficha Técnica</div>
            </template>
            <v-card>
              <v-card-text>
                <v-data-table
                  :headers="headers"
                  :items="getTable"
                  hide-actions
                  class="text-capitalize"
                >
                  <template slot="headerCell" slot-scope="{ header }">
                    <span
                      class="subheading font-weight-light text-success text--darken-3"
                      v-text="header.text"
                    />
                  </template>
                  <template slot="items" slot-scope="{ item }">
                    <td>{{ item.atributo }}</td>
                    <td>{{ item.detalle }}</td>
                  </template>
                </v-data-table>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      panel: [true],
      headers: [
        {
          sortable: false,
          text: "Atributo",
          value: "atributo"
        },
        {
          sortable: false,
          text: "Detalle",
          value: "detalle"
        }
      ]
    };
  },
  props: ["id"],
  created() {
    this.$store.dispatch("product/fetchProduct", this.id);
  },
  computed: {
    titulo() {
      return this.item.medida + " " + this.item.caracteristica;
    },
    getImagen() {
      return require("@/assets/" + this.item.imagen);
    },
    getTable() {
      const removeIndex = [0, 4, 10, 11, 12, 13, 14];
      let items = Object.keys(this.item).map(data => ({
        atributo: data,
        detalle: this.item[data]
      }));
      for (let i = removeIndex.length - 1; i >= 0; i--) {
        items.splice(removeIndex[i], 1);
      }
      return items;
    },
    ...mapState({
      item: state => state.product.product
    })
  },
  methods: mapActions("product", ["fetchProduct"])
};
</script>

<style scoped>
</style>