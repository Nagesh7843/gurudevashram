import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['logo.jpeg', 'apple-touch-icon.png'],
      manifest: {
        name: 'Poojya Shri Amrutananda Mahaswamiji - Gurudev Ashram',
        short_name: 'Gurudev Ashram',
        description: 'Luxury spiritual website for Gurudev Ashram with multilingual support.',
        theme_color: '#f4c96d',
        background_color: '#0f172a',
        display: 'standalone',
        icons: [
          {
            src: '/logo.jpeg',
            sizes: '192x192',
            type: 'image/jpeg'
          },
          {
            src: '/logo.jpeg',
            sizes: '512x512',
            type: 'image/jpeg'
          }
        ]
      }
    })
  ]
});
