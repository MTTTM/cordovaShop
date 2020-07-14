import cvd from "./module/cordova.js"
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    namespaced: true,
    modules: {
        cvd:cvd
    }
  })

  export default store;