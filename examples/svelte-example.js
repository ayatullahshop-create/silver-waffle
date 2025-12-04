/**
 * Svelte / SvelteKit Example
 * 
 * For SvelteKit:
 * Create or update src/routes/+layout.svelte
 */

// <script>
//   import { onMount } from 'svelte';
//   import { inject } from '@vercel/analytics';
// 
//   onMount(() => {
//     inject();
//   });
// </script>
// 
// <slot />

/**
 * For regular Svelte (in main.js):
 */

import { inject } from '@vercel/analytics';
import App from './App.svelte';

// Initialize Vercel Web Analytics
inject();

const app = new App({
  target: document.getElementById('app')
});

export default app;
