import { ADD_PIN, DEL_PIN, RESET_PIN } from "../actions/pinAction"

const initialState = {
    pinVal: '',
}


export const pinReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PIN:
            return {
                ...state,
                pinVal: state.pinVal + action.payload
            }
        case DEL_PIN:
            return {
                pinVal: state.pinVal.slice(0,-1)
            }
        case RESET_PIN:
            return {
                pinVal: '',
            }
        default: return state    
    }
}
