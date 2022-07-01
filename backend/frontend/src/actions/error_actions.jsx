export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS, 
    errors: errors
})

export const clearErrors = (error) => ({
    type: CLEAR_ERRORS, 
    error: error
})