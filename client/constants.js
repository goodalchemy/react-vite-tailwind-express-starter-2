// Set BASE_URL to localhost during development, or the production URL otherwise.
export const BASE_URL =
  typeof window !== "undefined" && window.location.hostname === "localhost"
    ? "http://localhost:3000"
    : "https://your-production-server-url.com";
