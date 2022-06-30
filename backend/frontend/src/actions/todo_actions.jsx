import * as APIUtil from "../util/todo_api_util";

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";


export const receiveTodos = (todos) => {
    return {        
        type: RECEIVE_TODOS, 
        todos: todos
    }
}

export const receiveTodo = (todo) => {
    return {
        type: RECEIVE_TODO, 
        todo: todo,
    }
}

export const removeTodo = (todo) => {
    return {
        type: REMOVE_TODO, 
        todoId: todo.id
    }
}

export const fetchTodos = () => {

    return (
        (dispatch) => {
            APIUtil.fetchTodos().then(
                (todos) => {
                    dispatch(receiveTodos(todos));
                }
            )
        }
    )
}

export const createTodo = (todo) => {
    return (
        (dispatch) => {
            APIUtil.createTodo(todo).then(
                (data) => {dispatch(receiveTodo(data))})
                .catch( 
                (err) => {dispatch(receiveErrors(err.responseJSON))}
            )
        }
    )
}