import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Only apply manual chunks for client build, not SSR
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor';
            }
            if (id.includes('react-router')) {
              return 'router';
            }
          }
        },
      },
    },
    // Optimize bundle size
    minify: 'terser',
    // Generate source maps for production debugging
    sourcemap: false,
    // Reduce chunk size warnings threshold
    chunkSizeWarningLimit: 1000,
  },
  // Optimize development
  server: {
    host: true,
    port: 5173,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router'],
  },
});
