import React from 'react'
import {Text} from "react-native";
import {View} from "react-native";
import {StyleSheet} from "react-native";

export const Result = ({resultText}) => {
    return (
        <View style={styles.result}>
            <Text style={styles.resultText}>{resultText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    resultText: {
        fontSize: 40,
        color: '#00CBFC'
    },
    result: {
        flex: 2,
        backgroundColor: '#0F0F0F',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
});