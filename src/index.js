import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
// React is loaded and is available as React and ReactDOM
// imports should NOT be used
document.body.innerHTML = "<div id='root' />";
ReactDOM.render(<App />, document.getElementById("root"));
