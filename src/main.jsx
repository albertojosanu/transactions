import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./index.styled.js";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <GlobalStyle />
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </>,
);
