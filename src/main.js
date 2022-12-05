import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import HowToPlay from './components/HowToPlay.vue';

import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/how-to-play', component: HowToPlay }
    ]
});

const app = createApp(App);

app.use(router);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);

app.mount('#app');
