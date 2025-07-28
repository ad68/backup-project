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
        name: 'بکاپ-بیمه کشاورزی ایرانیان پوشش',
        short_name: 'بکاپ',
        description: 'بکاپ-بیمه کشاورزی ایرانیان پوشش',
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
