import * as utils from "./utils";

export default {
  install(Vue) {
    Object.keys(utils).forEach(k => Vue.filter(k, utils[k]));
  }
};
