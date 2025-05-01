import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Set up global image path handling for GitHub Pages
window.__BASE_PATH__ = import.meta.env.BASE_URL || "/";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
