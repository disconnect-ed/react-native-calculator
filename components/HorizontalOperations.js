
import React from 'react'
import {TouchableOpacity} from "react-native";
import {Text} from "react-native";
import {View} from "react-native";
import {StyleSheet} from "react-native";
import {useTheme} from "@react-navigation/native";

export const HorizontalOperations = ({operate, horizontalOperations}) => {
    const {colors} = useTheme()
    let horizontalOps = []
    for (let i = 0; i < 3; i++) {
        let row = []
        for (let j = 0; j < 3; j++) {
            row.push(<TouchableOpacity key={horizontalOperations[i][j]} style={{...styles.btn, backgroundColor: colors.mainTheme.bg2}}
                                       onPress={() => operate(horizontalOperations[i][j])}>
                <Text style={{...styles.btnText, color: colors.mainTheme.textColor}}>{horizontalOperations[i][j]}</Text>
            </TouchableOpacity>)
        }
        horizontalOps.push(<View style={styles.row}>{row}</View>)
    }
    return (
        <View style={styles.horizontalOperations}>
            {horizontalOps}
        </View>
    )
}

const styles = StyleSheet.create({
    btnText: {
        fontSize: 30,
        color: 'white'
    },
    btn: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    row: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    horizontalOperations: {
        flex: 3,
        backgroundColor: '#1C1C1C',
        justifyContent: 'space-between',
    }
});