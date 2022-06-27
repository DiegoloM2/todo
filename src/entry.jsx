import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import { createStore } from "redux";
import reducer from "./reducers/reducer.jsx";

document.addEventListener("DOMContentLoaded", () => {
    const store = createStore(reducer);

    const root = document.getElementById("root");
    ReactDOM.render(<Root store = {store} />, root);

})