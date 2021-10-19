import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { AP } from "./components/theme/theme";
ReactDOM.render(
  <React.StrictMode>
    <AP>
      <App />
    </AP>
  </React.StrictMode>,
  document.getElementById("root")
);
