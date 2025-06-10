import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";

// Define the Unity function globally
// Define Unity function globally
if (!window.dispatchReactUnityEvent) {
  window.dispatchReactUnityEvent = (eventData) => {
    const unityEvent = new CustomEvent("GetUnityData", { detail: eventData });
    window.dispatchEvent(unityEvent);
    console.log("Unity event dispatched:", eventData);
  };
}

// Render the React app

if (process.env.NODE_ENV === "production") {
  console.error = () => {}; // Suppress error messages in production
  console.warn = () => {}; // Suppress warning messages in production
}
window.onerror = function (message, source, lineno, colno, error) {
  // You can log the error here if needed
  // console.log('Error:', message, source, lineno, colno, error);

  // Return true to prevent the error from being shown in the console
  return true;
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <ThemeProvider>

    <App />
      </ThemeProvider>
  </React.StrictMode>
);
