import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
// import 'ant-design-vue/dist/reset.css';

// import { setupAntd, setupAssets, setupGlobalMethods } from '@/plugins';

import 'normalize.css';

import '@/assets/styles/_reset.scss';

createApp(App).use(router).use(createPinia()).mount('#app');
