import React from "react";
import ReactDOM from "react-dom/client";
import { PrismicProvider } from "@prismicio/react";
import "./index.css";
import App from "./App";
import prismicClient from "./prismic";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);


root.render(
  <React.StrictMode>
    <PrismicProvider client={prismicClient}>
      <App />
    </PrismicProvider>
  </React.StrictMode>
);
