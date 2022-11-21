export const TOGGLE_ID_VISIBLE = 'TOGGLE_ID_VISIBLE'
export const TOGGLE_BAL_VISIBLE = 'TOGGLE_BAL_VISIBLE'
export const READ_NOTI = 'READ_NOTI'
export const UPDATE_NOTI = 'UPDATE_NOTI'
export const RESET_VIS_STATE = 'RESET_VIS_STATE'



export const toggleID = () => {
    return {
        type: TOGGLE_ID_VISIBLE,
    };
};

export const toggleBal = () => {
    return {
        type: TOGGLE_BAL_VISIBLE,
    };
};

export const readNoti = () => {
    return {
        type: READ_NOTI,
    };
};

export const updateNoti = () => {
    return {
        type: UPDATE_NOTI,
    };
};

export const resetVisState = () => {
    return {
        type: RESET_VIS_STATE,
    }
}