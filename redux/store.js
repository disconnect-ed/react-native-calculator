import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import {historyReducer} from "./reducers/history-reducer";
import {themeReducer} from "./reducers/theme-reducer";

const rootReducer = combineReducers({
    history: historyReducer,
    theme: themeReducer
})

export default createStore(rootReducer, applyMiddleware(thunk))