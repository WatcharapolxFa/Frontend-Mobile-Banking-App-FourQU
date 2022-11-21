import { createStore, combineReducers, applyMiddleware } from 'redux';
import VisibleReducer from "./reducers/visibleReducer";
import { pinReducers } from "./reducers/pinReducer";
import { transactionReducer } from './reducers/transactionReducer';
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    visible: VisibleReducer,
    pin: pinReducers,
    // transaction: transactionReducer, 
})

export const store = createStore(rootReducer, applyMiddleware(thunk));