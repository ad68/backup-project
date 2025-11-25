import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path'

export default defineConfig({

  plugins: [
    react(),
    VitePWA({
      registerType: 'prompt',
      includeAssets: ['favicon.ico', "icon-192x192", "icon-512x512"],
      manifest: {
        name: 'بکاپ - اپلیکیشن صندوق بیمه کشاورزی',
        short_name: 'بکاپ',
        description: 'بکاپ - اپلیکیشن صندوق بیمه کشاورزی',
        theme_color: '#2ebf70',
        background_color: '#2ebf70',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: 'icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/map\.bakapp\.ir\/wmts\/gm_layer\/gm_grid\/.*\.png$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'tile-cache',
              expiration: {
                maxEntries: 500,
                maxAgeSeconds: 30 * 24 * 60 * 60,
              },
            },
          },
        ],
        globPatterns: [
          '**/*.{js,css,html,ico,png,svg,json}',
          'fonts/yekanBakh/woff/*.woff',
          'fonts/yekanBakh/woff2/*.woff2',
        ],
      },
    })

  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    host: true
  }
})
