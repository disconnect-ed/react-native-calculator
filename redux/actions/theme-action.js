import {IS_DARK_THEME, SET_DARK_THEME, SET_LIGHT_THEME} from "../reducers/theme-reducer";


export const setMainTheme = (isDarkTheme) => {
    return dispatch => {
        if (isDarkTheme) {
            dispatch({type: SET_DARK_THEME})
            dispatch({type: IS_DARK_THEME, payload: isDarkTheme})
        } else {
            dispatch({type: SET_LIGHT_THEME})
            dispatch({type: IS_DARK_THEME, payload: isDarkTheme})
        }
    }
}
