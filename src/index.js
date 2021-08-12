import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./fonts/Sprat-RegularBold.otf";
import "./fonts/Sprat-Regular.otf";
import "./fonts/Sprat-RegularBlack.otf";
import "./fonts/Sprat-Regularlight.otf";
import "./fonts/Sprat-RegularMedium.otf";
import "./fonts/Sprat-RegularThin.otf";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
