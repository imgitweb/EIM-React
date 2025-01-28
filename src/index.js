import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

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
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
