import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import {historyReducer} from "./reducers/history-reducer";

const rootReducer = combineReducers({
    history: historyReducer
})

export default createStore(rootReducer, applyMiddleware(thunk))