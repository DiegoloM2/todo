import TodoList from "./todo_list.jsx";
import { connect } from "react-redux";
import {allTodos } from "../../reducers/selectors.jsx";
import { receiveTodo, removeTodo } from "../../actions/todo_actions";
import { toggleForm } from "../../actions/util_actions.jsx";
const mapStateToProps = state => ({
    todos: allTodos(state),
    form: state.utils.showForm,
})

const mapDispatchToProps = dispatch => (
    {
        receiveTodo: todo => dispatch(receiveTodo(todo)), 
        removeTodo: todo => dispatch(removeTodo(todo)),
        toggleForm: () => dispatch(toggleForm()),
    }
)

let ConnectedTodoList =  connect(
    mapStateToProps, 
    mapDispatchToProps,
)(TodoList);

export default ConnectedTodoList;