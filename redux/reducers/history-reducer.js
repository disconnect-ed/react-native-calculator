export const LOAD_HISTORY = 'LOAD_HISTORY'
export const ADD_CALCULATE = 'ADD_CALCULATE'
export const IS_LOADING = 'IS_LOADING'

const initialState = {
    allHistory: [],
    loading: true,
}

export const historyReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_HISTORY:
            return {
                ...state,
                allHistory: action.payload.reverse(),
                loading: false
            }
        case ADD_CALCULATE:
            return {
                ...state,
                allHistory: [{...action.payload}, ...state.allHistory]
            }
        case IS_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state
    }
}