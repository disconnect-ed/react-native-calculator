import React from 'react'
import {} from 'react-native'
import {TouchableOpacity} from "react-native";
import {Text} from "react-native";
import {View} from "react-native";
import {StyleSheet} from "react-native";
import {useTheme} from "@react-navigation/native";

export const Numbers = ({buttonPressed, operate}) => {
    const {colors} = useTheme()
    let rows = []
    for (let i = 0; i < 4; i++) {
        let row = []
        let nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['.', 0, '=']]
        for (let j = 0; j < 3; j++) {
            row.push(<TouchableOpacity key={nums[i][j]}
                                       onPress={() => {nums[i][j] === '.' ?
                                           operate('.')
                                           :
                                           buttonPressed(nums[i][j])
                                       }}
                                       style={{...styles.btn, backgroundColor: colors.mainTheme.bg1}}>
                <Text style={styles.btnText}>{nums[i][j]}</Text>
            </TouchableOpacity>)
        }
        rows.push(<View style={styles.row}>{row}</View>)
    }
    return (
        <View style={{...styles.numbers, backgroundColor: colors.mainTheme.bg1}}>
            {rows}
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
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    numbers: {
        flex: 3,
    }
});