import React from 'react'
import {Text} from "react-native";
import {View} from "react-native";
import {StyleSheet} from "react-native";
import {useTheme} from "@react-navigation/native";

export const Calculation = ({calculationText}) => {
    const {colors} = useTheme()
    return (
        <View style={{...styles.calculation, backgroundColor: colors.mainTheme.bg3}}>
            <Text style={{...styles.calculationText, color: colors.mainTheme.textColor2}}>{calculationText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    calculationText: {
        fontSize: 30,
    },
    calculation: {
        flex: 1,
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
});