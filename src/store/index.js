//import Vue from 'vue'
import { createStore } from 'vuex'

//Vue.use(Vuex)

import coachesModule from './modules/coaches/index';
import requestModule from './modules/requests/index';
import authModule from './modules/auth/index';

const store = createStore({
  modules:{
    coaches: coachesModule,
    requests: requestModule,
    auth: authModule
  }
})

export default store;
