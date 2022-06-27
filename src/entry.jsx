import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from './store/store.jsx';

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    console.log(store.getState());
    window.store = store;
    const root = document.getElementById("root");
    ReactDOM.render(<Root store = {store} />, root);

})