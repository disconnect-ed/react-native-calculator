import React from 'react'
import {View, StyleSheet} from 'react-native'
import {DrawerContentScrollView, DrawerItem, DrawerItemList} from '@react-navigation/drawer'
import {Title, Drawer, Text, Switch} from 'react-native-paper'
import {useTheme} from "@react-navigation/native";


export const DrawerContent = ({selectTheme, isDarkTheme, ...props}) => {
    const {colors} = useTheme()
    console.log(colors)
    return (
        <View style={{...styles.container, backgroundColor: colors.mainTheme.bg3}}>
            <DrawerContentScrollView {...props}>
                <Title style={{...styles.title, color: colors.mainTheme.textColor2}}>Меню</Title>
                <View>
                        <DrawerItemList {...props} />
                        <View style={{...styles.theme, borderColor: colors.mainTheme.textColor2}}>
                            <Text style={{...styles.text, color: colors.mainTheme.textColor2}}>Темная тема</Text>
                            <Switch tintColor={colors.mainTheme.bg2} color={'#00CBFC'} onValueChange={selectTheme} value={isDarkTheme} />
                        </View>
                </View>
            </DrawerContentScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0F0F0F'
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        marginVertical: 15
    },
    text: {
        fontSize: 18,
    },
    theme: {
        borderTopWidth: 1,
        paddingTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    btn: {
        color: 'pink'
    }
});