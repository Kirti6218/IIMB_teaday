import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Handle GitHub Pages redirect from 404.html
const redirectedPath = sessionStorage.redirect;
if (redirectedPath) {
  sessionStorage.removeItem("redirect");
  window.history.replaceState(null, "", redirectedPath);
}

createRoot(document.getElementById("root")!).render(<App />);
