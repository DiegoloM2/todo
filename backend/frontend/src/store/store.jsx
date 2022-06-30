import {createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/root_reducer.jsx";
import checkActionType from "../middleware/thunk";
import logger from "redux-logger";

let configureStore = (preloadedState = {}) => (
    createStore(
      rootReducer(),
      preloadedState,
      applyMiddleware(checkActionType, logger)
    ));

export default configureStore;

