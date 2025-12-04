/**
 * React / Next.js Example
 * 
 * For Next.js App Router (app directory):
 * Place this in app/layout.tsx or app/layout.jsx
 */

import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My App</title>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

/**
 * For Next.js Pages Router (pages directory):
 * Place this in pages/_app.tsx or pages/_app.jsx
 */

// import { Analytics } from '@vercel/analytics/react';
// 
// function MyApp({ Component, pageProps }) {
//   return (
//     <>
//       <Component {...pageProps} />
//       <Analytics />
//     </>
//   );
// }
// 
// export default MyApp;

/**
 * For Create React App or other React setups:
 * Place this in your root component (usually App.jsx or index.jsx)
 */

// import { Analytics } from '@vercel/analytics/react';
// 
// function App() {
//   return (
//     <div>
//       <YourAppContent />
//       <Analytics />
//     </div>
//   );
// }
