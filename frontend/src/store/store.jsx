import {createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/root_reducer.jsx";
import thunk from "redux-thunk";
import logger from "redux-logger";

let configureStore = (preloadedState = {}) => (
    createStore(
      rootReducer(),
      preloadedState,
      applyMiddleware(thunk, logger)
    ));

export default configureStore;

