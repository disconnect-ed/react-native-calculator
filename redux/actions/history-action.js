import {DB} from "../../db/db";
import {ADD_CALCULATE, IS_LOADING, LOAD_HISTORY} from "../reducers/history-reducer";

const isLoading = (bool) => {
    return dispatch => {
        dispatch({
            type: IS_LOADING,
            payload: bool
        })
    }
}

export const loadHistory = () => {
    return async dispatch => {
        isLoading(true)
        const history = await DB.getHistory()
        dispatch({
            type: LOAD_HISTORY,
            payload: history
        })
    }
}

export const addCalculate = data => async dispatch => {
    isLoading(true)
    const payload = {...data}
    const id = await DB.addCalculate(data)
    payload.id = id
    dispatch({
        type: ADD_CALCULATE,
        payload
    })
}