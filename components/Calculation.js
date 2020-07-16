import React from 'react'
import {Text} from "react-native";
import {View} from "react-native";
import {StyleSheet} from "react-native";

export const Calculation = ({calculationText}) => {
    return (
        <View style={styles.calculation}>
            <Text style={styles.calculationText}>{calculationText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    calculationText: {
        fontSize: 30,
        color: '#00CBFC'
    },
    calculation: {
        flex: 1,
        backgroundColor: '#0F0F0F',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
});