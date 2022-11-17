export const ADD_PIN = "ADD_PIN"
export const DEL_PIN = "DEL_PIN"
export const RESET_PIN = 'RESET_PIN' 

export const addPin = (value) => {
    return {
        type: ADD_PIN,
        payload: value
    }
}

export const deletePin = () => {
    return {
        type: DEL_PIN,       
    }
}

export const resetPin = () => {
    return {
        type: RESET_PIN,
    }
}