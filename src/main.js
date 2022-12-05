import { createApp } from 'vue';

import App from './App.vue';
import Router from './router.js';
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';

const app = createApp(App);

app.use(Router);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);

app.mount('#app');