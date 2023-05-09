import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ScrollTop from "./components/ScrollTop";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollTop />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
