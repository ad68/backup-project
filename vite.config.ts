import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // بهتره autoUpdate باشه برای آپدیت خودکار SW
      includeAssets: ['favicon.ico'],
      manifest: {
        name: 'بکاپ-بیمه کشاورزی ایرانیان پوشش',
        short_name: 'بکاپ',
        description: 'اپلیکیشن نقشه آفلاین',
        theme_color: '#2ebf70',
        background_color: '#2ebf70',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: 'icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        navigateFallback: '/index.html',
        navigateFallbackDenylist: [
          new RegExp('^/api/'),              // درخواست‌های API کش نشن
          new RegExp('/[^/?]+\\.[^/]+$'),   // فایل‌هایی که پسوند دارن (js, css, png, ...)
        ],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/mt[0-3]\.google\.com\/vt\/.*/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'google-map-tiles',
              expiration: {
                maxEntries: 500,
                maxAgeSeconds: 60 * 60 * 24 * 30,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: ({ request }) =>
              request.destination === 'script' || request.destination === 'style',
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'static-resources',
            },
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    host: true,
  },
})
