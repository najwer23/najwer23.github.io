import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),

    VitePWA({
      registerType: 'autoUpdate',
      strategies: 'injectManifest',
      srcDir: 'src',
      filename: 'najwer23sw.js',
      workbox: {
        // You can add Workbox options here if needed
        // e.g., navigateFallback: '/index.html'
      },
      manifest: {
        name: 'Mariusz Najwer',
        short_name: 'Mariusz Najwer',
        display: 'standalone',
        start_url: '/',
        scope: '/',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
          {
            src: 'icon/192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'icon/512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
        ],
      },
    }),
  ],
  build: {
    outDir: './build',

    // node_modules is mostly the main reason for the large chunk problem,
    // With this you're telling Vite to treat the used modules separately.
    // To understand better what it does, try to compare the logs from the
    // build command with and without this change
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
  },
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@najwer23': path.resolve(__dirname, './src'),
    },
  },
});
