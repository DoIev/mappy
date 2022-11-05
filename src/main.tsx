import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ApplicationContextProvider } from "./context/application.context";
import { DomainContextProvider } from "./context/domain.context";
import { ServicesContextProvider } from "./context/services.context";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <ApplicationContextProvider>
      <ServicesContextProvider>
        <DomainContextProvider>
          <App />
        </DomainContextProvider>
      </ServicesContextProvider>
    </ApplicationContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
