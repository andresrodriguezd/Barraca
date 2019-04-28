import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categorias: [
      {
        id: 1,
        nombre: "terraza",
        descripcion: "",
        imagen: require("@/assets/tipo-madera/tabla.jpg")
      },
      {
        id: 2,
        nombre: "tabla",
        descripcion: "",
        imagen: require("@/assets/tipo-madera/tabla.jpg")
      },
      {
        id: 3,
        nombre: "tinglado",
        descripcion: "",
        imagen: require("@/assets/tipo-madera/tabla.jpg")
      },
      {
        id: 4,
        nombre: "palo",
        descripcion: "",
        imagen: require("@/assets/tipo-madera/tabla.jpg")
      },
      {
        id: 5,
        nombre: "forro",
        descripcion: "",
        imagen: require("@/assets/tipo-madera/tabla.jpg")
      },
      {
        id: 6,
        nombre: "poste",
        descripcion: "",
        imagen: require("@/assets/tipo-madera/tabla.jpg")
      },
      {
        id: 7,
        nombre: "tablon",
        descripcion: "",
        imagen: require("@/assets/tipo-madera/tabla.jpg")
      }
    ]
  },
  mutations: {},
  actions: {}
});
