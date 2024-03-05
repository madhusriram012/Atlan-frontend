import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { GitHubDataProvider } from "./components/context/Datacontext";
import { NetworkProvider } from "./components/context/NetworkContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    <NetworkProvider>
      <GitHubDataProvider>
        <App />
      </GitHubDataProvider>
    </NetworkProvider>

);
