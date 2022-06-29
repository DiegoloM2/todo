import { connect } from "react-redux";
import {  removeTodo } from "../../actions/todo_actions";
import TodoDetailView from "./todo_detail_view.jsx";

const mapDispatchToProps = (dispatch) => {
    return (
        {
            removeTodo: (todo) => dispatch(removeTodo(todo)),
        }
    )
}

const ConnectedTodoDetailView = connect(null, mapDispatchToProps)(TodoDetailView);

export default ConnectedTodoDetailView; 