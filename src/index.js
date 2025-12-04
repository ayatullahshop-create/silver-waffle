/**
 * Example JavaScript entry point for frameworks
 * This demonstrates how to integrate Vercel Web Analytics using inject()
 * 
 * Usage: Import and call inject() in your app's main entry point
 * Note: This must run on the client side
 */

import { inject } from '@vercel/analytics';

// Initialize Vercel Web Analytics
// This should be called once when your application starts
inject();

console.log('Vercel Web Analytics initialized');

// Your application code goes here
// Example: Initialize your framework, set up routing, etc.
