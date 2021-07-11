import { createApp } from 'vue';
import App from './App';
import router from './router';
import store from './store/index';
import BaseCard from './pages/components/ui/BaseCard';
import BaseButton from './pages/components/ui/BaseButton';
import BaseBadge from './pages/components/ui/BaseBadge';
import BaseSpinner from './pages/components/ui/BaseSpinner';

const app = createApp(App);
app.use(router);
app.use(store);
app.component('base-card',BaseCard);
app.component('base-button',BaseButton);
app.component('base-badge',BaseBadge);
app.component('base-spinner',BaseSpinner)
app.mount('#app');
