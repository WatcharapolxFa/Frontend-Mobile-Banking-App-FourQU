export const TOGGLE_ID_VISIBLE = 'TOGGLE_ID_VISIBLE'
export const TOGGLE_BAL_VISIBLE = 'TOGGLE_BAL_VISIBLE'
export const READ_NOTI = 'READ_NOTI'
export const UPDATE_NOTI = 'UPDATE_NOTI'
export const REFRESH_SCREEN= 'REFRESH_SCREEN'



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

export const refreshScreen = () => {
    return {
        type: REFRESH_SCREEN,
    }
}