import todosReducer from "./todos_reducer.jsx";
import { combineReducers } from "redux";
import stepsReducer from "./steps_reducer.jsx";

const rootReducer = () => {
    return combineReducers({
        todos: todosReducer,
        steps: stepsReducer,
    })
}
export default rootReducer;