import { receiveErrors } from "./error_actions";
import * as APIUtil from "../util/step_api_util.jsx";

export const RECEIVE_STEPS = 'RECEIVE_STEPS';
export const RECEIVE_STEP = "RECEIVE_STEP";
export const REMOVE_STEP = "REMOVE_STEP";

// Steps will have a 'title', 'todo_id', and 'done' value.


export const receiveStep = (step) => ({type: RECEIVE_STEP, step: step})
export const receiveSteps = (steps) => ({type: RECEIVE_STEPS, steps:steps})
export const removeStep = (id) => ({type: REMOVE_STEP, id:id })

export const fetchSteps = (todoId) => (
        (dispatch) => {
            APIUtil.fetchSteps(todoId).then(
                steps => dispatch(receiveSteps(steps)), 
                errors => dispatch(receiveErrors(errors))
            )
        }
    )

export const createStep = (step) => (
    (dispatch) => {
        APIUtil.createStep(step).then(
            step => dispatch(receiveStep(step)), 
            errors => dispatch(receiveErrors(errors))
        )
    }
)

export const deleteStep = (id) =>  (
    (dispatch) => {
        APIUtil.deleteStep(id).then(
            id => dispatch(removeStep(id)),
            errors => dispatch(receiveErrors(errors))
        )
    }
)