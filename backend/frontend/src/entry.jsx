import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from './store/store.jsx';
import { createTodo } from "./actions/todo_actions.jsx";

document.addEventListener("DOMContentLoaded", () => {
    window.createTodo = createTodo;
    const store = configureStore();
    window.store = store;
    const root = document.getElementById("root");
    ReactDOM.render(<Root store = {store} />, root);

})