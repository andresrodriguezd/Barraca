<template>
  <div>
    <section class="patron">
      <v-container id="subscribe" tag="section">
        <v-container grid-list-xl pa-0>
          <v-layout wrap>
            <v-flex xs12 md5>
              <h2 class="mb-3 font-weight-medium">Suscribete</h2>
              <p>
                Ingresa tu correo para recibir nuestras mejores
                ofertas
              </p>

              <v-layout wrap pa-2>
                <v-text-field solo hide-details style="max-width: 400px;"/>
                <v-btn class="ma-0" color="secondary" style="height: 48px">Suscribete</v-btn>
              </v-layout>
            </v-flex>
            <v-flex xs12 md6 offset-md1>
              <h2 class="font-weight-medium">Contacto</h2>
              <v-list class="transparent">
                <v-list-tile>
                  <v-list-tile-avatar>
                    <v-icon class="elevation-4" dark>mdi-email-outline</v-icon>
                  </v-list-tile-avatar>
                  <v-list-tile-title>EMAIL</v-list-tile-title>
                  <v-list-tile-sub-title>CONTACTO@ENTABLAR.CL</v-list-tile-sub-title>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-avatar>
                    <v-icon class="elevation-4" dark>mdi-map-marker</v-icon>
                  </v-list-tile-avatar>
                  <v-list-tile-title>DIRECCIÓN</v-list-tile-title>
                  <v-list-tile-sub-title>1234 WORLD DR. HERE, TX 76123</v-list-tile-sub-title>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-avatar>
                    <v-icon class="elevation-4" dark>mdi-phone</v-icon>
                  </v-list-tile-avatar>
                  <v-list-tile-title>TELEFONO</v-list-tile-title>
                  <v-list-tile-sub-title>555-789-1234</v-list-tile-sub-title>
                </v-list-tile>
              </v-list>
            </v-flex>
          </v-layout>
        </v-container>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.patron {
  background-image: url("../assets/stripes-light.png");
  background-repeat: repeat-x;
}
</style>