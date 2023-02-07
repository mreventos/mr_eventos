import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { App } from "./app";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RecoilRoot>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
  </RecoilRoot>
);
