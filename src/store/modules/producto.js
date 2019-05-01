import ProductService from "@/services/ProductService.js";
export const state = {
  products: []
};
export const mutations = {
  SET_PRODUCTS(state, products) {
    return (state.products = products);
  }
};
export const actions = {
  fetchProducts({ commit }) {
    ProductService.getProducts()
      .then(response => {
        commit("SET_PRODUCTS", response.data);
      })
      .catch(error => {
        console.log("There was an error:", error.response);
      });
  }
};
