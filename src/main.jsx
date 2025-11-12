import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import HotmartPonte from "./components/hotmartponte.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
      <HotmartPonte />
      <App />
    </HashRouter>
);
