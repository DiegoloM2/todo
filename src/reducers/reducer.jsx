const reducer = (state = [], action) => {
    Object.freeze(state); 
    switch (action.type) {
        case 'Action':
            return [...state, action.payload];
        default: 
            return state;
    }
};

export default reducer;