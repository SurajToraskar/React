import React from "react";
import ReactDOM from "react-dom";
import App from "./App";


const ReactElement = React.createElement(
  "a",
  { href: "https://www.google.com", target: "_blank" },
  "Click Google"
);

ReactDOM.createRoot(document.getElementById("root")).render(
  ReactElement
);