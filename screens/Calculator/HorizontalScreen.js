import React from 'react'
import {StyleSheet, View} from 'react-native'
import {MainOperations} from "../../components/MainOperations";
import {Numbers} from "../../components/Numbers";
import {HorizontalOperations} from "../../components/HorizontalOperations";
import {Calculation} from "../../components/Calculation";
import {Result} from "../../components/Result";

export const HorizontalScreen = ({calculationText, resultText, buttonPressed, operate,
                                     operations, deleteAll, horizontalOperations}) => {

    return (
        <View style={styles.container}>
            <Result resultText={resultText} />
            <Calculation calculationText={calculationText} />
            <View style={styles.buttons}>
                <HorizontalOperations operate={operate} horizontalOperations={horizontalOperations} />
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
        flexDirection: 'row',
    }
});