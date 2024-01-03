import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "./build",

    // node_modules is mostly the main reason for the large chunk problem, 
    // With this you're telling Vite to treat the used modules separately. 
    // To understand better what it does, try to compare the logs from the 
    // build command with and without this change
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
  server: {
    port: 3000,
  },
});
