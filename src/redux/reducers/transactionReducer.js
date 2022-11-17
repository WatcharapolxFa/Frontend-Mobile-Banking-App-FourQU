import { FETCH_TRANSACTION, RECIEVE_ERROR, RECIEVE_TRANSACTION } from "../actions/transactionAction"

const initialState = {
    userData: [],
    isFetching: false,
    isError: false
}


export const transactionReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TRANSACTION:
            return Object.assign({}, state, {
                isFetching: true,
                userData: [],
                isError: false
            })
        case RECIEVE_TRANSACTION:
            return Object.assign({}, state, {
                userData: action.payload,
                isFetching: false,
                isError: false
            })
        case RECIEVE_ERROR:
            return Object.assign({}, state, {
                isError: true,
                isFetching: false
            })
        default: return state
    }
}

