import todosReducer from "./todos_reducer.jsx";
import { combineReducers } from "redux";
import stepsReducer from "./steps_reducer.jsx";
import utilReducer from "./util_reducer.jsx";

const rootReducer = () => {
    return combineReducers({
        todos: todosReducer,
        steps: stepsReducer,
        utils: utilReducer
    })
}
export default rootReducer;