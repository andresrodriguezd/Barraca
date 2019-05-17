<<template>
   <div>
    <v-container grid-list-md>
      <v-layout row wrap pb-4>
        <v-flex xs12 sm6 pr-5>
          <div class="headline mb-2 font-weight-medium">{{ titulo }}</div>
          <v-layout column>
            <p>
              {{ item.descripcion }}
            </p>
          </v-layout>
        </v-flex>
        <v-flex xs12 sm6>
          <v-layout column>
            <v-img :src="getImagen" aspect-ratio="1.7"></v-img>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
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
    ...mapState({
      item: state => state.product.product
    })
  },
  methods: mapActions("product", ["fetchProduct"])
};
</script>

<style scoped>
</style>