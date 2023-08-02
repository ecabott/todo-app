import React from "react";
import ReactDOM from "react-dom/client";
import ExampleApp from "./ExampleApp";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ExampleApp />
  </React.StrictMode>
);
