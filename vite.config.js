import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'favicon-48x48.png', 'favicon-96x96.png', 'favicon-192x192.png', 'favicon-512x512.png', 'apple-touch-icon.png', 'logo.png', 'logo.jpeg'],
      manifest: {
        name: 'Gurudev Ashram',
        short_name: 'Gurudev Ashram',
        description: 'Welcome to Gurudev Ashram, Akalawadi. Discover the spiritual journey, ashram life, and yoga programs under the guidance of Poojya Shri Amrutanand Mahaswamiji.',
        theme_color: '#f4c96d',
        background_color: '#0f172a',
        display: 'standalone',
        icons: [
          {
            src: '/favicon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/favicon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/favicon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ]
});
