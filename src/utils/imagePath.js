// filepath: d:\Projects\Portfolio\src\utils\imagePath.js
/**
 * Helper function to generate correct image paths for both development and GitHub Pages deployment
 * Ensures images work correctly when hosted on GitHub Pages
 * @param {string} path - The relative path to the image
 * @returns {string} - The properly formatted image path
 */
export function getImagePath(path) {
  // Strip any leading slash
  const cleanPath = path.replace(/^\//, "");

  // Use the global base path set in main.jsx
  return `${window.__BASE_PATH__}${cleanPath}`;
}
