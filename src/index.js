/**
=========================================================
* WedGlobally React - v4.0.1
=========================================================
 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter,HashRouter } from "react-router-dom";
import App from "App";

// WedGlobally React Context Provider
import { SoftUIControllerProvider } from "context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <HashRouter basename={process.env.PUBLIC_URL}>
    <SoftUIControllerProvider>
      <App />
    </SoftUIControllerProvider>
  </HashRouter>
  </React.StrictMode>
);
