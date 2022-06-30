import { TOGGLE_FORM } from "../actions/util_actions";


const utilReducer = (state = {showForm:false}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case TOGGLE_FORM: 
            let showForm = !state.showForm;
            return { showForm: showForm };
        default: 
            return state;
    }
}
export default utilReducer;