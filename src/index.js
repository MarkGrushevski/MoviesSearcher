import React from "react";
import {render} from "react-dom";
import "./assets/styles/index.scss";
import App from "./components/App";

render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById("root")
);

