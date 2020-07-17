import React from "react";
import ReactDOM from "react-dom";

import ReactWebCam from "./ReactWebCam";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ReactWebCam />
  </React.StrictMode>,
  rootElement
);
