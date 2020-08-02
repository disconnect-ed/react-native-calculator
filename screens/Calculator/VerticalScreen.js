import React from 'react'
import {StyleSheet, View} from 'react-native'
import {Numbers} from "../../components/Numbers";
import {MainOperations} from "../../components/MainOperations";
import {Calculation} from "../../components/Calculation";
import {Result} from "../../components/Result";

export const VerticalScreen = ({calculationText, resultText, buttonPressed, operate, deleteAll, operations}) => {
    return (
        <View style={styles.container}>
            <Result resultText={resultText} />
            <Calculation calculationText={calculationText} />
            <View style={styles.buttons}>
                <Numbers operate={operate} operations={operations} buttonPressed={buttonPressed}/>
                <MainOperations operations={operations} deleteAll={deleteAll} operate={operate}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    buttons: {
        flexGrow: 5,
        flexDirection: 'row'
    },
});