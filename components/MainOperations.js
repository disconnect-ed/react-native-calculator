import React from 'react'
import {TouchableOpacity} from "react-native";
import {Text} from "react-native";
import {View} from "react-native";
import {StyleSheet} from "react-native";

export const MainOperations = ({deleteAll, operate, operations}) => {
    let ops = []
    for (let i = 0; i < 5; i++) {
        const deleteButton = operations[i] === 'DEL' ? true : null
        ops.push(<TouchableOpacity style={styles.btn}
                                   onPress={() => operate(operations[i])}
                                   onLongPress={deleteButton ? deleteAll : null}
        >
            <Text style={[styles.btnText, {color: deleteButton ? '#C17D00' : '#00CBFC'}]}>{operations[i]}</Text>
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
        backgroundColor: '#1C1C1C',
        justifyContent: 'space-between'
    }
});