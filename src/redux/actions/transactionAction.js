import axios from "axios"
import { store } from "../store"

export const FETCH_TRANSACTION = 'FETCH_TRANSACTION'
export const RECIEVE_TRANSACTION = 'RECIEVE_TRANSACTION'
export const RECIEVE_ERROR = 'RECIEVE_ERROR'

export const fetchTransaction = () => {
    return {
        type: FETCH_TRANSACTION
    }
}

export const recieveTransaction = tran => {
    return {
        type: RECIEVE_TRANSACTION,
        payload: tran
    }
}

export const recieveError = () => {
    return {
        type: RECIEVE_ERROR
    }
}


export const thunk_fetch_transaction = tran => {
    store.dispatch(fetchTransaction());
    return function (dispatch, getState) {
        return axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            dispatch(recieveTransaction(res.data.map(tran => ({
                id: tran.id,
                user: tran.username,
                date: Number(tran.id),
                press: false,
            }))))
          })
          .catch(err => dispatch(recieveError()))
    }
}