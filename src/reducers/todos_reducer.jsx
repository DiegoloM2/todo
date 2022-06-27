import { RECEIVE_TODO, RECEIVE_TODOS } from "../actions/todoActions";

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
    switch (action.type) {
        case RECEIVE_TODO: 
            return { ...state, ...action.todo};

        case RECEIVE_TODOS:
            let newState = {} 
            
            action.todos.map(
                (todo, idx) => {
                    newState = {...newState, idx:todo}
                })  
                
            return newState;
            
        default:
            return initialState;
    }
}

export default todosReducer;