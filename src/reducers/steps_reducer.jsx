import {RECEIVE_STEP, RECEIVE_STEPS, REMOVE_STEP } from "../actions/step_actions"

const stepsReducer = function (state = {}, action) {
    Object.freeze(state);

    switch (action.type) {


        case RECEIVE_STEP:
            let keys = Object.keys(state).map ( key => (parseInt(key)))
            let idx = Math.max(...keys) + 1;
            let step = {}
            action.step.id = idx;
            step[idx] = action.step;
            return { ...state, ...step }; 


        case RECEIVE_STEPS: 
            let steps = {} 
                
            action.steps.map(
                (step, idx) => {
                    steps[idx] = step;
                })  
                
            return steps;


        case REMOVE_STEP: 
            let updated = {...state};  
            delete updated[action.step.id];
            return updated;


        default: 
            return state
    }

}

export default stepsReducer;