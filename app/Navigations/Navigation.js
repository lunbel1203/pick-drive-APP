import React, { useRef } from 'react'
import { View, Dimensions, Animated, Text, Platform } from 'react-native'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome5 } from '@expo/vector-icons'

// RESOURCES
import { Colors } from '../Styles/Colors'

// SCREENS
import VehiclesScreen from '../Screens/VehiclesScreen'
import RentScreen from '../Screens/RentsScreen'
import AccountScreen from '../Screens/AccountScreen'

const Tab = createBottomTabNavigator()

const Navigation = ({ focused }) => {
    const os = Platform.OS === 'ios' ? 15 : 0

    const { colorMamey, colorNaranja ,colorGris } = Colors
    const tabOffsetValue = useRef(new Animated.Value(0)).current

    return (
        <NavigationContainer>
            <Tab.Navigator initialRoute="Vehicles" 
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        height: 80,
                        flex: 1,
                        justifyContent: 'center',
                        backgroundColor: 'white',
                        marginHorizontal: 20,
                        paddingHorizontal: 20,
                        borderRadius: 10,
                        position: 'absolute',
                        bottom: 30,
                        shadowColor: '#f5f5f5',
                        shadowOpacity: 0.06,
                        shadowOffset: {
                            width: 10,
                            height: 10,
                        },
                        elevation: 3
                    }
                }}
            >
                <Tab.Screen name="Vehicles" component={VehiclesScreen} 
                    options={{ 
                        title: "Vehículos", 
                        tabBarLabel: "Vehículos",
                        tabBarIcon: ({ focused }) => (
                            <View style={{
                                width: '100%',
                                height: 80,
                                justifyContent: 'center',
                                top: os,
                            }}>
                                <FontAwesome5 
                                    style={{
                                        width: '100%',
                                        textAlign: 'center'
                                    }}
                                    name="home" 
                                    size={25}
                                    color={ focused ? colorMamey : colorGris }
                                ></FontAwesome5>
                                <Text style={{ 
                                    width: '100%', 
                                    textAlign: 'center', 
                                    paddingTop: 5,
                                    color: focused ? colorMamey : colorGris }}>Vehículos</Text>
                            </View>
                        )
                    }}
                    listeners={({ Navigation, route }) => ({
                        tabPress: e => {
                            Animated.spring(tabOffsetValue, {
                                toValue: 0,
                                useNativeDriver: true
                            }).start()
                        }
                    })}
                />
                <Tab.Screen name="Rents" component={RentScreen} 
                    options={{ 
                        title: "Mis rentas", 
                        tabBarLabel: "Mis rentas",
                        tabBarIcon: ({ focused }) => (
                            <View style={{
                                width: '100%',
                                height: 80,
                                justifyContent: 'center',
                                top: os,
                            }}>
                                <FontAwesome5 style={{ width: '100%', textAlign: 'center' }}
                                    name="car" 
                                    size={25}
                                    color={ focused ? colorMamey : colorGris }
                                >
                                </FontAwesome5>
                                <Text style={{ 
                                    width: '100%', 
                                    textAlign: 'center', 
                                    paddingTop: 5,
                                    color: focused ? colorMamey : colorGris }}>Mis rentas</Text>
                            </View>
                        )
                    }}
                    listeners={({Navigation, route}) => ({
                        tabPress: e => {
                            Animated.spring(tabOffsetValue, {
                                toValue: getWidth(),
                                useNativeDriver: true
                            }).start()
                        }
                    })}
                />
                <Tab.Screen name="Cuenta" component={AccountScreen} 
                    options={{ 
                        title: "Cuenta", 
                        tabBarIcon: ({ focused }) => (
                            <View style={{
                                width: '100%',
                                height: 80,
                                justifyContent: 'center',
                                top: os,
                            }}>
                                <FontAwesome5 style={{ width: '100%', textAlign: 'center' }}
                                    name="user" 
                                    size={25}
                                    color={ focused ? colorMamey : colorGris }
                                >
                                </FontAwesome5>
                                <Text style={{ 
                                    width: '100%', 
                                    textAlign: 'center', 
                                    paddingTop: 5,
                                    color: focused ? colorMamey : colorGris }}>Cuenta</Text>
                            </View>
                        )
                    }}
                    listeners={({Navigation, route}) => ({
                        tabPress: e => {
                            Animated.spring(tabOffsetValue, {
                                toValue: getWidth() * 2,
                                useNativeDriver: true
                            }).start()
                        }
                    })}
                />
            </Tab.Navigator>
            <Animated.View style={{
                width: getWidth() - 20,
                height: 3,
                backgroundColor: colorMamey,
                position: 'absolute',
                bottom: 107,
                left: 50,
                transform: [
                    {translateX: tabOffsetValue}
                ]
            }}
            ></Animated.View>
        </NavigationContainer>
    )
}

const getWidth = () => {
    let width = Dimensions.get('window').width

    width = width - 80

    // Total three Tabs
    return width / 3
}

export default Navigation;