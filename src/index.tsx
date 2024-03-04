import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";
import store from "./store/store";
import { routeNames } from "./routes/routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={routeNames.AUTH}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
