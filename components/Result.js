import React from 'react'
import {Text} from "react-native";
import {View} from "react-native";
import {StyleSheet} from "react-native";
import {useTheme} from "@react-navigation/native";

export const Result = ({resultText}) => {
    const {colors} = useTheme()
    return (
        <View style={{...styles.result, backgroundColor: colors.mainTheme.bg3}}>
            <Text style={{...styles.resultText, color: colors.mainTheme.textColor2}}>{resultText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    resultText: {
        fontSize: 40,
    },
    result: {
        flex: 2,
        backgroundColor: '#0F0F0F',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
});