import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import './index.css'
import { ThemeProvider } from "./components/UseThemeContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);

