import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import Container from "./layouts/Container/Container";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <Container>
      <App />
   </Container>
);
