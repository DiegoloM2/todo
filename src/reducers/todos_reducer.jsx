import { RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO } from "../actions/todo_actions";

const initialState = {
    1: {
      id: 1,
      title: "wash car",
      body: "with soap",
      done: false
    },
    2: {
      id: 2,
      title: "wash dog",
      body: "with shampoo",
      done: true
    }
  };


const todosReducer = (state = initialState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TODO: 
            let keys = Object.keys(state).map ( key => (parseInt(key)))
            let idx = Math.max(...keys) + 1;
            let todo = {}
            action.todo.id = idx;
            todo[idx] = action.todo;
            return { ...state, ...todo };

        case RECEIVE_TODOS:
            let todos = {} 
            
            action.todos.map(
                (todo, idx) => {
                    todos[idx] = todo;
                })  
                
            return todos;

        case REMOVE_TODO: 
            let updated = {...state};  
            delete updated[action.todoId];
            return updated;

            
        default:
            return initialState;
    }
}

export default todosReducer;