import { TOGGLE_ID_VISIBLE, TOGGLE_BAL_VISIBLE } from "../actions/visibleAction";

const initialState = {
    idVisible: false,
    balVisible: false,
    isRead: false,
    refreshing: false
};

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

export default (state = initialState, action) => {
    switch (action.type){
        case TOGGLE_ID_VISIBLE:
            return{
                ...state,
                idVisible: !state.idVisible,
            };
        case TOGGLE_BAL_VISIBLE:
            return{
                ...state,
                balVisible: !state.balVisible,
            };
        case 'READ_NOTI':
            return {
                ...state,
                isRead: true,
            };
        case 'UPDATE_NOTI':
            return {
                ...state,
                isRead: false,
            }
        case 'REFRESH_SCREEN':
            return  {
                refreshing: true,
            }
        default:
            return state;
    }
};