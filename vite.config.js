import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: '/',
  assetsInclude: ['**/*.jpg', '**/*.png'],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]', // Ensure assets are hashed
      },
    },
  },
  define: {
    "process.env": {}, // Ensure Vite exposes environment variables
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern",
      },
    },
  },
});