//import Vue from 'vue'
import { createStore } from 'vuex'

//Vue.use(Vuex)

import coachesModule from './modules/coaches/index';

const store = createStore({
  modules:{
    coaches: coachesModule
  }
})

export default store;
