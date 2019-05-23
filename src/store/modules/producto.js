import ProductService from "@/services/ProductService.js";
export const namespaced = true;
export const state = {
  products: [],
  product: {}
};
export const mutations = {
  SET_PRODUCTS(state, products) {
    return (state.products = products);
  },
  SET_PRODUCT(state, product) {
    state.product = product;
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
  },
  fetchProduct({ commit, getters }, id) {
    var product = getters.getProductById(id);
    if (product) {
      commit("SET_PRODUCT", product);
    } else {
      ProductService.getProduct(id)
        .then(response => {
          commit("SET_PRODUCT", response.data);
        })
        .catch(error => {
          console.log("There was an error:", error.response);
        });
    }
  }
};
export const getters = {
  getProductById: state => id => {
    return state.products.find(product => product.id === id);
  }
};
