import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { MappyContextProvider } from "./context/mappy.context";
import { DomainContextProvider } from "./context/domain.context";
import { ServicesContextProvider } from "./context/services.context";
import { ApplicationContextProvider } from "./context/application.context";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <ApplicationContextProvider>
      <MappyContextProvider>
        <ServicesContextProvider>
          <DomainContextProvider>
            <App />
          </DomainContextProvider>
        </ServicesContextProvider>
      </MappyContextProvider>
    </ApplicationContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
