import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.tsx";
import { LayoutProvider } from "./context/LayoutContext.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <LayoutProvider>
      <App />
    </LayoutProvider>
  </BrowserRouter>,
);
