import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/index.scss";
import {App} from "./views/App/index";
import {Header} from "./shared/components/header/Header";
import {Footer} from "./shared/components/footer/Footer";

ReactDOM.render(
    <React.StrictMode>
        <Header/>
        <main>
            <App/>
        </main>
        <Footer/>
    </React.StrictMode>,
    document.getElementById("root")
);

