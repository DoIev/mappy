import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DomainContextProvider } from "./context/domain.context";
import { ServicesContextProvider } from "./context/services.context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ServicesContextProvider>
      <DomainContextProvider>
        <App />
      </DomainContextProvider>
    </ServicesContextProvider>
  </React.StrictMode>
);
