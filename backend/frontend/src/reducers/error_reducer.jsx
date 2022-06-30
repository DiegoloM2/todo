import { RECEIVE_ERRORS, CLEAR_ERRORS } from "../actions/error_actions.jsx";

const initialState = [];

const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_ERRORS:
            return action.errors;

        case CLEAR_ERRORS: 
            return initialState;
        default: 
            return initialState;
    }
} 

export default errorReducer;