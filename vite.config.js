import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'apple-touch-icon.png'],
      manifest: {
        name: 'Poojya Shri Amritananda Mahaswamiji - Gurudev Ashram',
        short_name: 'Gurudev Ashram',
        description: 'Luxury spiritual website for Gurudev Ashram with multilingual support.',
        theme_color: '#f4c96d',
        background_color: '#0f172a',
        display: 'standalone',
        icons: [
          {
            src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=192&q=80',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=512&q=80',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
});
