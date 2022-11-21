import { TOGGLE_ID_VISIBLE, TOGGLE_BAL_VISIBLE, RESET_VIS_STATE, UPDATE_NOTI, READ_NOTI } from "../actions/visibleAction";

const initialState = {
    idVisible: false,
    balVisible: false,
    isRead: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_ID_VISIBLE:
            return {
                ...state,
                idVisible: !state.idVisible,
            };
        case TOGGLE_BAL_VISIBLE:
            return {
                ...state,
                balVisible: !state.balVisible,
            };
        case READ_NOTI:
            return {
                ...state,
                isRead: true,
            };
        case UPDATE_NOTI:
            return {
                ...state,
                isRead: false,
            }
        case RESET_VIS_STATE:
            return {
                ...state,
                idVisible: false,
                balVisible: false
            }
        default:
            return state;
    }
};