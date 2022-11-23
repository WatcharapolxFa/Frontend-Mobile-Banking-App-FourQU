import axios from "axios"
import { response } from "express"
import { store } from "../store"

export const FETCH_USER_INFO = 'FETCH_USER_INFO'
export const FETCH_USER_PAY_INFO = 'FETCH_USER_PAY_INFO'
export const FETCH_SHOP_INFO = 'FETCH_SHOP_INFO'
export const FETCH_SHOP_PAY_INFO = 'FETCH_SHOP_PAY_INFO'

export const RECIEVE_USER_INFO = 'RECIEVE_USER_INFO'
export const RECIEVE_USER_PAY_INFO = 'RECIEVE_USER_PAY_INFO'
export const RECIEVE_SHOP_INFO = 'RECIEVE_SHOP_INFO'
export const RECIEVE_SHOP_PAY_INFO = 'RECIEVE_SHOP_PAY_INFO'

export const RECIEVE_ERROR = 'RECIEVE_ERROR'
export const SET_REFRESH_TOKEN = 'SET_REFRESH_TOKEN'

export const SET_USERNAME = 'SET_USERNAME'
export const SET_USER_BAL = 'SET_USER_BAL'

const fetchData = type => {
    switch (type) {
        case 'USER_INFO':
            return {
                type: FETCH_USER_INFO
            }
        case 'USER_PAY_INFO':
            return {
                type: FETCH_USER_PAY_INFO
            }
        case 'SHOP_INFO':
            return {
                typr: FETCH_SHOP_INFO
            }
        case 'SHOP_PAY_INFO':
            return {
                type: FETCH_SHOP_PAY_INFO
            }
        default: return type
    }
}

const receiveData = (type, data) => {
    switch (type) {
        case 'USER_INFO':
            return {
                type: RECIEVE_USER_INFO,
                payload: data
            }
        case 'USER_PAY_INFO':
            return {
                type: RECIEVE_USER_PAY_INFO,
                payload: data
            }
        case 'SHOP_INFO':
            return {
                type: RECIEVE_SHOP_INFO,
                payload: data
            }
        case 'SHOP_PAY_INFO':
            return {
                type: RECIEVE_SHOP_PAY_INFO,
                payload: data
            }
        default: return type
    }
}

const setUserName = data => {
    return {
        type: SET_USERNAME,
        payload: data
    }
}

export const setUserBal = bal => {
    return {
        type: SET_USER_BAL,
        payload: bal
    }
}

const setAccountNumber = id => {
    return {
        type: SET_ACC_NUMBER,
        payload: id
    }
}

const setAccountID = id => {
    return {
        type: SET_ACC_ID,
        payload: id
    }
}

const recieveError = () => {
    return {
        type: RECIEVE_ERROR
    }
}

export const setRefreshToken = token => {
    return {
        type: SET_REFRESH_TOKEN,
        payload: token
    }
}

const RefreshToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA2YTZmNDA5LTQyZDAtNDQ4MC1hMDg2LThiZmJiNTI5Y2IyNCIsImZpcnN0TmFtZSI6InRlc3QxIiwibWlkZGxlTmFtZSI6InQxIiwibGFzdE5hbWUiOiJUZXN0MSIsInRpbWVfc3RhbXAiOiIyMDIyLTExLTIyVDE5OjIwOjE1LjE4MloiLCJpYXQiOjE2NjkxNDQ4MTUsImV4cCI6MTY2OTc0OTYxNX0.oWlCdQ1eltE7-RR6Saa8Z-30SEwa3kNY6nZDH7mjKPo'


export const fetch_user_info = () => {
    store.dispatch(fetchData('USER_INFO'));
    return async function (dispatch, getState) {
        console.log(getState().account.refreshToken)
        return axios
            .post('https://server-quplus.herokuapp.com/api/auth/signin', {}, {
                headers: {
                    Authorization: `Bearer ${RefreshToken}`,
                },
            })
            .then(function (response) {
                // console.log(response.data.AcessToken)
                axios.get('https://server-quplus.herokuapp.com/api/auth/information', {
                    headers: {
                        "Authorization": `Bearer ${response.data.AcessToken}`,
                    },
                })
                    .then(function (res) {
                        const user = {
                            firstName: res.data.data.firstName,
                            middleName: res.data.data.middleName,
                            lastName: res.data.data.lastName,
                            BoD: res.data.data.BoD,
                            phone: res.data.data.phone,
                            email: res.data.data.email,
                            pictureProfile: res.data.data.pictureProfile,
                            address: res.data.data.address
                        }

                        // const user = res.data.data.firstName + " " + res.data.data.middleName + " " + res.data.data.lastName

                        console.log(user)
                        // dispatch(receiveData('USER_INFO', user))
                        dispatch(setUserName(user))
                    })
                    .catch(function (error) {
                        dispatch(recieveError(error)),
                            console.log(error)
                    })
            })

    }
}

export const fetch_user_pay_info = () => {

    store.dispatch(fetchData('USER_PAY_INFO'));
    return async function (dispatch, getState) {
        console.log(getState().account.refreshToken)
        return axios
            .post('https://server-quplus.herokuapp.com/api/auth/signin', {}, {
                headers: {
                    Authorization: `Bearer ${RefreshToken}`,
                },
            })
            .then(function (response) {
                console.log(response.data.AcessToken)
                axios.get('https://204c-171-103-180-74.ap.ngrok.io/user-payment/info/', {
                    headers: {
                        Authorization: `Bearer ${response.data.AcessToken}`,
                    },
                })
                    .then(function (res) {
                        // const user = {
                        //     firstName: res.data.data.firstName,
                        //     middleName: res.data.data.middleName,
                        //     lastName: res.data.data.lastName,
                        //     BoD: res.data.data.BoD,
                        //     phone: res.data.data.phone,
                        //     email: res.data.data.email,
                        //     pictureProfile: res.data.data.pictureProfile,
                        //     address: res.data.data.address
                        // }
                        console.log(res)
                        // dispatch(receiveData('USER_PAY_INFO', user))
                    })
                    .catch(function (error) {
                        dispatch(recieveError(error)),
                            console.log('payment error:', error)
                    })
            })

    }
}