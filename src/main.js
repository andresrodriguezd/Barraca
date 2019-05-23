import "@babel/polyfill";
import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import filters from "./filters";

Vue.config.productionTip = false;
Vue.use(filters);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
