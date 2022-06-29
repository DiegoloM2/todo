import TodoList from "./todo_list.jsx";
import { connect } from "react-redux";
import {allTodos } from "../../reducers/selectors.jsx";
import { receiveTodo, removeTodo } from "../../actions/todo_actions";

const mapStateToProps = state => ({
    todos: allTodos(state),
})

const mapDispatchToProps = dispatch => (
    {
        receiveTodo: todo => dispatch(receiveTodo(todo)), 
        removeTodo: todo => dispatch(removeTodo(todo)),
    }
)

let ConnectedTodoList =  connect(
    mapStateToProps, 
    mapDispatchToProps,
)(TodoList);

export default ConnectedTodoList;