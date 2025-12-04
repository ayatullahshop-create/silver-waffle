/**
 * Angular Example
 * 
 * For Angular:
 * Add this to your main.ts file
 */

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { inject } from '@vercel/analytics';
import { AppModule } from './app/app.module';

// Bootstrap Angular application
platformBrowserDynamic().bootstrapModule(AppModule)
  .then(() => {
    // Initialize Vercel Web Analytics after app is bootstrapped
    inject();
  })
  .catch(err => console.error(err));

/**
 * Alternative: Using APP_INITIALIZER
 * Add this to your app.module.ts
 */

// import { APP_INITIALIZER, NgModule } from '@angular/core';
// import { inject } from '@vercel/analytics';
// 
// export function initializeAnalytics() {
//   return () => {
//     inject();
//   };
// }
// 
// @NgModule({
//   // ... your module configuration
//   providers: [
//     {
//       provide: APP_INITIALIZER,
//       useFactory: initializeAnalytics,
//       multi: true
//     }
//   ]
// })
// export class AppModule { }
