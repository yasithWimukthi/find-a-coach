import { createApp } from 'vue';
//import Vuex from 'vuex'
import App from './App';
import router from './router';
import store from './store/index';

const app = createApp(App);
app.use(router);
//app.use(Vuex)
app.use(store);
app.mount('#app');
