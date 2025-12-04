# Vercel Web Analytics Setup Guide

This guide explains how to integrate Vercel Web Analytics into your project.

## Prerequisites

1. **Enable Web Analytics in Vercel Dashboard**
   - Go to your project settings in Vercel
   - Navigate to the Analytics tab
   - Enable Web Analytics

2. **Deploy to Vercel**
   - Analytics only works on Vercel-hosted projects
   - Data is not tracked in development mode

## Installation

### For Plain HTML Sites (No Package Required)

Simply add the following script tags to your HTML files before the closing `</body>` tag:

```html
<!-- Vercel Web Analytics -->
<script>
  window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
</script>
<script defer src="/_vercel/insights/script.js"></script>
```

**Example:** See `public/index.html` in this repository.

### For JavaScript/TypeScript Frameworks

1. **Install the package:**

   ```bash
   # npm
   npm install @vercel/analytics

   # pnpm
   pnpm add @vercel/analytics

   # yarn
   yarn add @vercel/analytics

   # bun
   bun add @vercel/analytics
   ```

2. **Choose your integration method based on framework:**

## Framework-Specific Integration

### React / Next.js

#### Next.js App Router (app directory)
Add to `app/layout.tsx` or `app/layout.jsx`:

```jsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

#### Next.js Pages Router (pages directory)
Add to `pages/_app.tsx` or `pages/_app.jsx`:

```jsx
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
```

#### Create React App
Add to your root component (e.g., `App.jsx`):

```jsx
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div>
      <YourAppContent />
      <Analytics />
    </div>
  );
}
```

**Example:** See `examples/react-example.jsx` in this repository.

### Vue.js

#### Vue 3
Add to `main.js` or `main.ts`:

```javascript
import { createApp } from 'vue';
import { inject } from '@vercel/analytics';
import App from './App.vue';

const app = createApp(App);

// Initialize Vercel Web Analytics
inject();

app.mount('#app');
```

#### Nuxt 3
Create a plugin file `plugins/vercel-analytics.client.js`:

```javascript
import { inject } from '@vercel/analytics';

export default defineNuxtPlugin(() => {
  inject();
});
```

**Example:** See `examples/vue-example.js` in this repository.

### Svelte / SvelteKit

#### SvelteKit
Update `src/routes/+layout.svelte`:

```svelte
<script>
  import { onMount } from 'svelte';
  import { inject } from '@vercel/analytics';

  onMount(() => {
    inject();
  });
</script>

<slot />
```

#### Regular Svelte
Add to `main.js`:

```javascript
import { inject } from '@vercel/analytics';
import App from './App.svelte';

// Initialize Vercel Web Analytics
inject();

const app = new App({
  target: document.getElementById('app')
});

export default app;
```

**Example:** See `examples/svelte-example.js` in this repository.

### Angular

Add to `main.ts`:

```typescript
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { inject } from '@vercel/analytics';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(() => {
    // Initialize Vercel Web Analytics after app is bootstrapped
    inject();
  })
  .catch(err => console.error(err));
```

**Example:** See `examples/angular-example.ts` in this repository.

### Other Frameworks

For any other JavaScript framework, use the `inject()` function:

```javascript
import { inject } from '@vercel/analytics';

// Call inject() in your app's entry point
// Must run on the client side
inject();
```

**Example:** See `src/index.js` in this repository.

## Important Notes

### Client-Side Only
- The `inject()` function must run on the client side
- It will not work in server-side rendering contexts
- For SSR frameworks, ensure it runs after hydration

### No Route Support
- The `inject()` method does not include built-in route tracking
- It tracks page views automatically but doesn't track SPA route changes
- For SPA route tracking, consider using the framework-specific Analytics component

### Development Mode
- Analytics does **not** track data in development mode
- You must deploy to Vercel to see analytics data
- After deployment, verify by checking for network requests to `/_vercel/insights/*`

### Verification

After deployment, verify the integration:

1. Open your deployed site in a browser
2. Open Developer Tools → Network tab
3. Navigate through your site
4. Look for requests to `/_vercel/insights/view` and `/_vercel/insights/vitals`
5. Check your Vercel Dashboard for analytics data (may take a few minutes)

## Configuration Options

The `inject()` function accepts optional configuration:

```javascript
inject({
  mode: 'auto', // 'auto' | 'production' | 'development'
  debug: false, // Enable debug logging
});
```

## Additional Resources

- [Vercel Web Analytics Documentation](https://vercel.com/docs/analytics)
- [Vercel Analytics Quickstart](https://vercel.com/docs/analytics/quickstart)
- [Advanced Configuration](https://vercel.com/docs/analytics/package)
- [GitHub Repository](https://github.com/vercel/analytics)

## Project Structure

This repository includes:

- `public/index.html` - Plain HTML implementation example
- `src/index.js` - Generic JavaScript implementation using inject()
- `examples/` - Framework-specific implementation examples
  - `react-example.jsx` - React and Next.js examples
  - `vue-example.js` - Vue and Nuxt examples
  - `svelte-example.js` - Svelte and SvelteKit examples
  - `angular-example.ts` - Angular example
