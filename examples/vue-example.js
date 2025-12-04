/**
 * Vue.js Example
 * 
 * For Vue 3:
 * Place this in your main.js or main.ts
 */

import { createApp } from 'vue';
import { inject } from '@vercel/analytics';
import App from './App.vue';

const app = createApp(App);

// Initialize Vercel Web Analytics
inject();

app.mount('#app');

/**
 * For Nuxt 3:
 * Create a plugin file: plugins/vercel-analytics.client.js
 */

// import { inject } from '@vercel/analytics';
// 
// export default defineNuxtPlugin(() => {
//   inject();
// });

/**
 * Alternative: For Vue 2
 */

// import Vue from 'vue';
// import { inject } from '@vercel/analytics';
// import App from './App.vue';
// 
// // Initialize analytics before mounting
// inject();
// 
// new Vue({
//   render: h => h(App),
// }).$mount('#app');
