import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path for GitHub Pages deployment
  base: "/Portfolio/",
  server: {
    // Enhanced security settings to prevent fs.deny bypass vulnerability
    fs: {
      strict: true,
      // Only allow access to essential project directories
      allow: [
        // Current working directory and its subdirectories
        process.cwd(),
      ],
      // Explicitly deny access to sensitive directories and files
      deny: [
        "**/.env*",
        "**/node_modules/.cache/**",
        "**/.git/**",
        "**/package-lock.json",
        "**/yarn.lock",
        "**/.npmrc",
        "**/.*rc*",
        "**/.*ignore",
      ],
    },
    // Add security headers
    headers: {
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "DENY",
      "X-XSS-Protection": "1; mode=block",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "Permissions-Policy": "geolocation=(), microphone=(), camera=()",
    },
    // Disable directory listing
    cors: false,
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
