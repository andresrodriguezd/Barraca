<<template>
   <div>
    <v-container grid-list-md>
      <v-layout row wrap pb-4>
        <v-flex xs12 sm6 pr-5>
          <div class="headline mb-2 font-weight-medium">Sobre Nosotros</div>
          <v-layout column>
            <p>
              Somos una empresa familiar con varios años en el rubro, contamos con gran variedad en tipos de madera y ademas con todo lo necesario para que te preocupes solo
              en instalar. Tenemos facilidades de pago y una muy buena ubicación todo en el centro de la ciudad
            </p>
          </v-layout>
        </v-flex>
        <v-flex xs12 sm6>
          <v-layout column>
            <v-img :src="require('../assets/2.jpg')" aspect-ratio="1.7"></v-img>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>