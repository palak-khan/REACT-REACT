import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Nav from "./components/Nav.jsx";
import Home from "./components/Home.jsx";

createRoot(document.getElementById("root")).render(
  <div>
    <App />
    <Home />
    <Nav />
  </div>
);
