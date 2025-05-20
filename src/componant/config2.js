const Frontend_URL =
  process.env.NODE_ENV === "production"
    ? "https://incubationmasters.com/login" // Production IP and port
    : "http://localhost:3000"; // Local development server

export default Frontend_URL;
