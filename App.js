import React, {useState} from 'react';
import store from './redux/store'
import {AppLoading} from "expo";
import {AppNavigation} from "./navigation/AppNavigation";
import {Provider} from "react-redux";
import {bootstrap} from "./bootstrap";

export default function App() {
    const [isReady, setIsReady] = useState(false)

    if (!isReady) {
        return <AppLoading onFinish={() => setIsReady(true)}
                           startAsync={bootstrap}
                           onError={(error) => console.log(error)}/>
    }

    return (
        <Provider store={store}>
            <AppNavigation/>
        </Provider>
    )
}
