import React from "react";
import ReactDOM from "react-dom";
import "./API/axios-default-options";
import App from "./App";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
