<template>
  <div>
    <section class="grey darken-4 white--text pb-1">
      <v-layout column wrap class="my-5" align-center>
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 class="headline">Ofertas y Servicios</h2>
            <span class="subheading">Deja la responsabilidad en nuestras manos</span>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <v-card class="elevation-0 px-2 py-4">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="amber--text text--lighten-2">straighten</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Medidas especifas</div>
                  </v-card-title>
                  <v-card-text>Encarga madera a tu medida. Todas las tablas que trabajamos son de 3.20m de largo si necesitas alguna medida superior solo contactanos (encargos personaliados minimo sobre 100 tablas)</v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 px-2 py-5">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="amber--text text--lighten-2">local_shipping</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Despacho Gratuito</div>
                  </v-card-title>
                  <v-card-text>
                    Por compras superiores a $50.000 te enviamos el material que necesites a tu hogar
                    Aprovecha esta oferta de despacho gratuito solo por este mes. Consulta horarios y disponibilidad en tu comuna,
                    te responderemos a la brevedad.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 px-2 py-4">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="amber--text text--lighten-2">border_style</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Cortes a tu medida</div>
                  </v-card-title>
                  <v-card-text>
                    Si tienes problema y no sabes como ahorrate un poco de trabajo Aprovecha nuestro servicio. Cortamos tu madera a la medida que necesites.
                    Consulta precios y disponibilidad no dudes en contactarnos
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>