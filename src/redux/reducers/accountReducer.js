import { SET_REFRESH_TOKEN, SET_USERNAME, SET_USER_BAL } from "../actions/accountAction"

const initialState = {
    username: "",
    userBal: "",
    accountNumber: "",
    accountID: "",

    shopName: "",
    shopAccountNumber: "",
    shopBal: "",
}


export const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REFRESH_TOKEN:
            return {
                refreshToken: action.payload
            }
        case SET_USERNAME:
            return Object.assign({}, state, {
                username: action.payload
            })
        case SET_USER_BAL:
            return Object.assign({}, state, {
                userBal: action.payload
            })
        default: return state
    }
}