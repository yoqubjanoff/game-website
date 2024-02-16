import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import MainContexProvider from "./context/index.jsx";
import { QueryParamProvider } from "use-query-params";
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MainContexProvider>
      <QueryParamProvider adapter={ReactRouter6Adapter}>
        <App />
      </QueryParamProvider>
    </MainContexProvider>
  </BrowserRouter>
);
