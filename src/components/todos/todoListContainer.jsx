import TodoList from "./todo_list.jsx";
import { connect } from "react-redux";
import {allTodos } from "../../reducers/selectors.jsx";
import { receiveTodo } from "../../actions/todo_actions";

const mapStateToProps = state => ({
    todos: allTodos(state),
})

const mapDispatchToProps = dispatch => (
    {
        receiveTodo: todo => dispatch(receiveTodo(todo)), 
    }
)

let ConnectedTodoList =  connect(
    mapStateToProps, 
    mapDispatchToProps,
)(TodoList);

export default ConnectedTodoList;