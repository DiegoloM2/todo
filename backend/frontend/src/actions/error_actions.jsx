const RECEIVE_ERRORS = "RECEIVE_ERRORS";
const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveErrors = (error) => ({
    type: RECEIVE_ERRORS, 
    error: error
})

const clearErrors = (error) => ({
    type: CLEAR_ERRORS, 
    error: error
})