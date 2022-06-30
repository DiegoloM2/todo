import { connect } from "react-redux";
import {  removeTodo } from "../../actions/todo_actions";
import {receiveSteps} from "../../actions/step_actions.jsx";
import TodoDetailView from "./todo_detail_view.jsx";


const mapDispatchToProps = (dispatch) => {
    return (
        {
            removeTodo: (todo) => dispatch(removeTodo(todo)),
            receiveSteps: (steps) => dispatch(receiveSteps(steps)),
        }
    )
}

const ConnectedTodoDetailView = connect(null, mapDispatchToProps)(TodoDetailView);

export default ConnectedTodoDetailView; 