import axios from "axios"
import { store } from "../store"

export const FETCH_TRANSACTION = 'FETCH_TRANSACTION'
export const RECIEVE_TRANSACTION = 'RECIEVE_TRANSACTION'
export const RECIEVE_ERROR = 'RECIEVE_ERROR'

const data = [
    {
        otherAccountNumber: '0093714533',
        nameOther: 'est',
        bankNameOther: '4QU',
        amount: 205,
        type: 'transfer',
        date: '2022-11-18T09:55:35.830Z',
        created_at: '2022-11-21T15:38:24.323Z',
    },
    {
        otherAccountNumber: '0093714533',
        nameOther: 'est',
        bankNameOther: '4QU',
        amount: 205,
        type: 'transfer',
        date: '2022-11-18T09:55:35.830Z',
        created_at: '2022-11-21T15:38:24.323Z',
    },
    {
        otherAccountNumber: '0093714533',
        nameOther: 'est',
        bankNameOther: '4QU',
        amount: 20508,
        type: 'receive',
        date: '2022-11-17T09:55:35.830Z',
        created_at: '2022-11-21T15:54:13.718Z',
    },
    {
        otherAccountNumber: '0093714533',
        nameOther: 'est',
        bankNameOther: '4QU',
        amount: 20508,
        type: 'receive',
        date: '2022-11-17T09:55:35.830Z',
        created_at: '2022-11-21T15:54:13.718Z',
    },
];

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


export const thunk_fetch_transaction = selectedMonth => {
    store.dispatch(fetchTransaction());
    return function (dispatch, getState) {

        dispatch(recieveTransaction(
            data.map(tran => ({
                otherAccountNumber: tran.otherAccountNumber,
                nameOther: tran.nameOther,
                bankNameOther: tran.bankNameOther,
                amount: tran.amount,
                type: tran.type,
                date: tran.date,
                created_at: tran.created_at,
                press: false,
            })),
        ))

        // return axios.post('https://6739-2001-44c8-4082-bcdc-5131-9b10-6f9-ba99.ap.ngrok.io/payment-transaction/month',
        //     {
        //         userAccoountNumber: "0093714533",
        //         date: "2022-11",
        //     }).then(res => {
        //         console.log(res.data)
        //         dispatch(recieveTransaction(
        //             res.data.map(tran => ({
        //                 otherAccountNumber: tran.otherAccountNumber,
        //                 nameOther: tran.nameOther,
        //                 bankNameOther: tran.bankNameOther,
        //                 amount: tran.amount,
        //                 type: tran.type,
        //                 date: tran.date,
        //                 created_at: tran.created_at,
        //                 press: false,
        //             })),
        //         ))
        //     })
        //     .catch(function (error) {
        //         console.log(error)
        //     })
    }
}