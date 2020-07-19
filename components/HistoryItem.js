import React from 'react'
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

export const HistoryItem = ({item, goCalc, removeCalc, colors}) => {
    return (
        <TouchableOpacity key={item.id} onPress={() => goCalc(item)}
                          style={{...styles.container, backgroundColor: colors.mainTheme.bg2}}>
            <View style={styles.header}>
                <Text style={{...styles.date, color: colors.mainTheme.textColor}}>
                    {item.date}
                </Text>
                <TouchableOpacity onPress={() => removeCalc(item.id)}>
                    <FontAwesome name="minus-circle" size={20} color={colors.mainTheme.textColor} />
                </TouchableOpacity>
            </View>

            <View style={styles.calcInfo}>
                <Text style={{...styles.calc, color: colors.mainTheme.textColor}}>
                    {item.calculate}
                </Text>
                <Text style={{...styles.result, color: colors.mainTheme.textColor}}>
                    = {item.result}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        backgroundColor: '#262626',
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginHorizontal: 10
    },
    date: {
        color: '#00CBFC',
        fontSize: 16,
        marginBottom: 15
    },
    calc: {
        color: '#00CBFC',
        fontSize: 20,
    },
    result: {
        color: '#00CBFC',
        fontSize: 20,
    },
    calcInfo: {
        alignItems: 'flex-end'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})