import React from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import log from "./utils/logger";

function ErrorFallback({ error }: { error: Error }) {
  log.error(error.message);
  return <p className="text-red semi-bold">Error: {error.message}</p>;
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

reportWebVitals();
