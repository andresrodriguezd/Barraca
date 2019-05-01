import Vue from "vue";
import Vuex from "vuex";
import * as product from "@/store/modules/producto.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    product
  },
  state: {
    categorias: [
      {
        id: 1,
        nombre: "terraza",
        descripcion: "",
        imagen: "tipo-madera/tabla.jpg"
      },
      {
        id: 2,
        nombre: "tabla",
        descripcion: "",
        imagen: "tipo-madera/tabla.jpg"
      },
      {
        id: 3,
        nombre: "tinglado",
        descripcion: "",
        imagen: "tipo-madera/tabla.jpg"
      },
      {
        id: 4,
        nombre: "palo",
        descripcion: "",
        imagen: "tipo-madera/tabla.jpg"
      },
      {
        id: 5,
        nombre: "forro",
        descripcion: "",
        imagen: "tipo-madera/tabla.jpg"
      },
      {
        id: 6,
        nombre: "poste",
        descripcion: "",
        imagen: "tipo-madera/tabla.jpg"
      },
      {
        id: 7,
        nombre: "tablon",
        descripcion: "",
        imagen: "tipo-madera/tabla.jpg"
      }
    ]
  },
  mutations: {},
  actions: {}
});
