// store/index.js

import Vue from 'vue'
import Vuex from 'vuex'

import modal from './modules/modal'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    modules: {
      modal
    }
  })
}

export default createStore