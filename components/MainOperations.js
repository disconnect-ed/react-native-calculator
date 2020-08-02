import React from 'react'
import {TouchableOpacity} from "react-native";
import {Text} from "react-native";
import {View} from "react-native";
import {StyleSheet} from "react-native";
import {useTheme} from "@react-navigation/native";

export const MainOperations = ({deleteAll, operate, operations}) => {
    const {colors} = useTheme()
    let ops = []
    for (let i = 0; i < 5; i++) {
        const deleteButton = operations[i] === 'DEL' ? true : null
        ops.push(<TouchableOpacity style={{...styles.btn, backgroundColor: colors.mainTheme.bg2}}
                                   onPress={() => operate(operations[i])}
                                   onLongPress={deleteButton ? deleteAll : null}
                                   key={operations[i]}
        >
            <Text style={{...styles.btnText, color: colors.mainTheme.textColor}}>{operations[i]}</Text>
        </TouchableOpacity>)
    }
    return (
        <View style={styles.operations}>
            {ops}
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
    operations: {
        flex: 1,
        justifyContent: 'space-between'
    }
});