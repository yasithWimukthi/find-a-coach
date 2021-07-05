import Vuex from 'vuex';

import coachesModule from './modules/coaches/index';

const store = Vuex.Store({
  modules:{
    coaches: coachesModule
  }
})
