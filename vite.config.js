import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // Changed from "./" to "/" for better asset handling
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    assetsInlineLimit: 0, // Ensures images are processed as assets
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
});
