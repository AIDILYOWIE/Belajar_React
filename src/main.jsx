import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Gallery from "./Gallery.jsx";
import App2 from "./App2.jsx";
import {createBrowserRoot, RouterProvider} form ""

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App2/>
  </StrictMode>
);
