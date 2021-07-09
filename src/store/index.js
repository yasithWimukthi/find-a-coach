//import Vue from 'vue'
import { createStore } from 'vuex'

//Vue.use(Vuex)

import coachesModule from './modules/coaches/index';
import requestModule from './modules/requests/index'

const store = createStore({
  modules:{
    coaches: coachesModule,
    requests: requestModule
  },
  state(){
    return {
      userId:"coach_3"
    }
  },
  getters:{
    userId(state){
      return state.userId
    }
  }
})

export default store;
