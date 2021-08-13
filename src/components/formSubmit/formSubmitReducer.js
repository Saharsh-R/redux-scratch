function formSubmitReducer(state = {name : '', email : ''}, action ){
    switch (action.type) {
        case 'SUBMIT':
            
            return action.payload;
    
        default:
            return state;
    }
}

export default formSubmitReducer