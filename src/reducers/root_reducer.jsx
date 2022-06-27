import todosReducer from "./todos_reducer.jsx";
import { combineReducers } from "redux";

const rootReducer = () => {
    return combineReducers({
        todos: todosReducer,
    })
}
export default rootReducer;