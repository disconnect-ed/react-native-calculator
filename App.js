import React, {useState} from 'react';
import store from './redux/store'
import {AppLoading} from "expo";
import {DB} from "./db/db";
import {AppNavigation} from "./navigation/AppNavigation";
import {Provider} from "react-redux";

export default function App() {
    const [isReady, setIsReady] = useState(false)

    if (!isReady) {
        return <AppLoading onFinish={() => setIsReady(true)}
                           startAsync={() => DB.init()}
                           onError={(error) => console.log(error)}/>
    }

    return (
        <Provider store={store}>
            <AppNavigation/>
        </Provider>
    )
}
