import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import {StateProvider} from "./context/Context"


ReactDOM.render(
  <StateProvider>
      <App />
  </StateProvider>,
  document.getElementById("root")
);
registerServiceWorker();
