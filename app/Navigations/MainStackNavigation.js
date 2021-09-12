import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// SCREENS
import LoginScreen from '../Screens/LoginScreen'
import RegisterScreen from '../Screens/RegisterScreen'
import DetailsScreen from '../Screens/DetailsScreen'
import CheckoutScreen from '../Screens/CheckoutScreen'

import TabNavigation from './TabNavigation'
import VehiclesScreen from '../Screens/VehiclesScreen'

const Stack = createStackNavigator()

const MainStackNavigation = () => {

    const screenOptionsStyles = {
        tabBarShowLabel: 'false',
    }

    return (
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={screenOptionsStyles}
            >
                <Stack.Screen 
                    name="TabNavigation"
                    component={TabNavigation}
                    options={{ 
                        title: "Vehículos",
                        headerShown: false 
                    }}
                />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
                <Stack.Screen name="Checkout" component={CheckoutScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStackNavigation