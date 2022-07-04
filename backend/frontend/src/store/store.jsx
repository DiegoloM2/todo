import {createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/root_reducer.jsx";
import checkActionType from "../middleware/thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

let configureStore = (preloadedState = {}) => (
    createStore(
      rootReducer(),
      preloadedState,
      composeWithDevTools(applyMiddleware(checkActionType, logger)),
    ));

export default configureStore;

