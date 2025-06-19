import React from "react";
import { BrowserRouter } from "react-router-dom";
import "@clayui/css/lib/css/atlas.css";

import { EmployeeRoutes } from "./routes";

import log from "./utils/logger";

log.info("App loaded");

export default function App() {
  return (
    <BrowserRouter>
      <EmployeeRoutes />
    </BrowserRouter>
  );
}
