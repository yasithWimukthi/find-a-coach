//import Vue from 'vue'
import { createStore } from 'vuex'

//Vue.use(Vuex)

import coachesModule from './modules/coaches/index';

const store = createStore({
  modules:{
    coaches: coachesModule
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
