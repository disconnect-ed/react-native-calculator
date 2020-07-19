import React, {useEffect} from 'react'
import {Text, View, StyleSheet, FlatList, TouchableOpacity, Alert} from 'react-native'
import {useDispatch, useSelector} from "react-redux";
import {loadHistory} from "../redux/actions/history-action";
import {HistoryItem} from "../components/HistoryItem";
import {useNavigation, useTheme} from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import {DB} from "../db/db";


export const HistoryScreen = () => {
    const {colors} = useTheme()
    const dispatch = useDispatch()
    const allHistory = useSelector(state => state.history.allHistory)
    const loading = useSelector(state => state.history.loading)
    useEffect(() => {
        dispatch(loadHistory())
    }, [allHistory])
    const navigation = useNavigation();
    const goCalc = (item) => {
        navigation.navigate('Calculator', {
            calculate: item.calculate,
            result: item.result
        })
    }
    const deleteAll = () => {
        Alert.alert(
            'Удаление всей истории',
            'Вы точно хотите удалить всю историю расчетов?',
            [
                {
                    text: 'Нет',
                    style: 'cancel'
                },
                { text: 'Да', onPress: () => DB.deleteAllHistory()}
            ],
            { cancelable: false }
        );
    }

    const removeCalc = (id) => {
        Alert.alert(
            'Удаление расчета',
            'Вы точно хотите удалить расчет?',
            [
                {
                    text: 'Нет',
                    style: 'cancel'
                },
                { text: 'Да', onPress: () => DB.removeCalc(id)}
            ],
            { cancelable: false }
        );
    }

    if (loading) {
        return <Text style={styles.notFound}>Загрузка...</Text>
    }

    return (
        <View style={{...styles.container, backgroundColor: colors.mainTheme.bg3}}>
            <View style={styles.header}>
                <Text style={{...styles.title, color: colors.mainTheme.textColor2}}>
                    История
                </Text>
                <TouchableOpacity onPress={deleteAll}>
                    <FontAwesome5 name="trash" size={20} color={colors.mainTheme.textColor2} />
                </TouchableOpacity>
            </View>

            <FlatList data={allHistory} renderItem={({item}) => <HistoryItem removeCalc={removeCalc} goCalc={goCalc}
                                                                             item={item} colors={colors}/>}
                      keyExtractor={item => item.id}
                      ListEmptyComponent={() => <Text style={styles.notFound}>Пусто</Text>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0F0F0F',
        paddingTop: 20,
        // paddingHorizontal: 10
    },
    title: {
        fontSize: 30,
        color: '#00CBFC',

    },
    header: {
        marginBottom: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    notFound: {
        fontSize: 25,
        color: '#00CBFC',
        textAlign: 'center',
        paddingVertical: '50%'
    }
})