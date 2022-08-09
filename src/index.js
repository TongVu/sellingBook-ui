import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux"; // <-
import { store } from "./store/store"; // <-
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);


/** 2.PROVIDE THE STORE TO REACT */
root.render(
  <Provider store={store}> 
    <App />
  </Provider>
);
