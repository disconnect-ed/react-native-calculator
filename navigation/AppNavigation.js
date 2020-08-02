import React, {useState} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import {HistoryScreen} from "../screens/HistoryScreen";
import {CalculatorScreen} from "../screens/Calculator/CalculatorScreen";
import {DrawerContent} from "./DrawerContent";

export const AppNavigation = () => {
    const [isDarkTheme, setTheme] = useState(true)
    const Drawer = createDrawerNavigator();
    const selectTheme = () => {
        setTheme(!isDarkTheme)
    }
    const myTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            mainTheme: {
                textColor: isDarkTheme ? '#00CBFC' : 'white',
                textColor2: isDarkTheme ? '#00CBFC' : '#1e90ff',
                bg1: isDarkTheme ? '#262626' : '#00bfff',
                bg2: isDarkTheme ? '#1C1C1C' : '#1e90ff',
                bg3: isDarkTheme ? '#0F0F0F' : 'white',
            }
        },
    }
    return (
        <NavigationContainer theme={myTheme}>
            <Drawer.Navigator initialRouteName="Calculator"
                              drawerContent={props => <DrawerContent {...props} selectTheme={selectTheme}
                                                                     isDarkTheme={isDarkTheme}
                              />}
                              drawerContentOptions={{
                                  activeTintColor: myTheme.colors.mainTheme.textColor2,
                                  itemStyle: {  },
                                  labelStyle: {
                                      color: myTheme.colors.mainTheme.textColor2,
                                      fontSize: 18
                                  },

                              }}
                              edgeWidth={500}
            >
                <Drawer.Screen name="Calculator" component={CalculatorScreen}
                               options={{
                                   title: 'Калькулятор',
                               }}
                />
                <Drawer.Screen name="History" component={HistoryScreen}
                               options={{
                                   title: 'История расчетов',
                               }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
