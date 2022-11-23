import { createStore, combineReducers, applyMiddleware } from 'redux';
import VisibleReducer from "./reducers/visibleReducer";
import { pinReducers } from "./reducers/pinReducer";
import { transactionReducer } from './reducers/transactionReducer';
import { accountReducer } from './reducers/accountReducer';
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    visible: VisibleReducer,
    pin: pinReducers,
    transaction: transactionReducer, 
    account: accountReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));