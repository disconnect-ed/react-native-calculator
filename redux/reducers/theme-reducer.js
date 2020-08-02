export const SET_DARK_THEME = 'SET_DARK_THEME'
export const SET_LIGHT_THEME = 'SET_LIGHT_THEME'
export const IS_DARK_THEME = 'IS_DARK_THEME'

const initialState = {
    isDarkTheme: true,
    mainTheme: {
        textColor: '#00CBFC',
        textColor2: '#00CBFC',
        bg1: '#262626',
        bg2: '#1C1C1C',
        bg3: '#0F0F0F'
    },
    darkTheme: {
        textColor: '#00CBFC',
        textColor2: '#00CBFC',
        bg1: '#262626',
        bg2: '#1C1C1C',
        bg3: '#0F0F0F'
    },
    lightTheme: {
        textColor: 'white',
        textColor2: '#1e90ff',
        bg1: '#00bfff',
        bg2: '#1e90ff',
        bg3: 'white',
    },
}

export const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DARK_THEME:
            return {
                ...state,
                mainTheme: {...state.darkTheme}
            }
        case SET_LIGHT_THEME:
            return {
                ...state,
                mainTheme: {...state.lightTheme}
            }
        case IS_DARK_THEME:
            return {
                ...state,
                isDarkTheme: action.payload
            }
        default:
            return state
    }
}