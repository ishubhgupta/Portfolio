import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path for GitHub Pages deployment
  base: "/Portfolio/",
  server: {
    // Enhanced security settings to prevent fs.deny bypass vulnerability
    fs: {
      strict: true,
      // Explicitly deny access to sensitive directories
      allow: [
        // Only allow the essential directories for the project
        path.resolve(__dirname, "src"),
        path.resolve(__dirname, "public"),
        path.resolve(__dirname, "node_modules"),
      ],
      deny: [
        path.resolve(__dirname, ".git"),
        path.resolve(__dirname, ".env"),
        path.resolve(__dirname, "node_modules/.vite"),
      ],
    },
    // Add security headers
    headers: {
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "DENY",
      "X-XSS-Protection": "1; mode=block",
    },
  },
  // Enforce strict builds to prevent security issues
  build: {
    sourcemap: false, // Disable sourcemaps in production for better security
    assetsInlineLimit: 4096, // Inline smaller assets to reduce HTTP requests
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          vendor: [
            "@fortawesome/free-brands-svg-icons",
            "@fortawesome/free-solid-svg-icons",
            "@fortawesome/react-fontawesome",
          ],
        },
      },
    },
  },
});
