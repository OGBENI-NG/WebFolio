import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Specify the base path for your application (adjust as needed)
    base: 'https://webfolio-adeolu.netlify.app',

    // Define the rollup options
    rollupOptions: {
      // Make sure to add this output option
      output: {
        manualChunks: undefined,
      },
    },
  },
});