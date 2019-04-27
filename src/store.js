import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categorias: [
      {
        nombre: "terraza",
        descripcion: "",
        imagen: require("@/assets/tipo-madera/tabla.jpg")
      },
      {
        nombre: "tabla",
        descripcion: "",
        imagen: require("@/assets/tipo-madera/tabla.jpg")
      },
      {
        nombre: "tinglado",
        descripcion: "",
        imagen: require("@/assets/tipo-madera/tabla.jpg")
      },
      {
        nombre: "palo",
        descripcion: "",
        imagen: require("@/assets/tipo-madera/tabla.jpg")
      },
      {
        nombre: "forro",
        descripcion: "",
        imagen: require("@/assets/tipo-madera/tabla.jpg")
      },
      {
        nombre: "poste",
        descripcion: "",
        imagen: require("@/assets/tipo-madera/tabla.jpg")
      },
      {
        nombre: "tablon",
        descripcion: "",
        imagen: require("@/assets/tipo-madera/tabla.jpg")
      }
    ]
  },
  mutations: {},
  actions: {}
});
