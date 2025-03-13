import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { LayoutProvider } from "./context/LayoutContext.tsx";
import ScrollToTop from "./components/ScrollToTop";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <LayoutProvider>
      <ScrollToTop />
      <App />
    </LayoutProvider>
  </BrowserRouter>,
);
