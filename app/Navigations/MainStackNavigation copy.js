import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// SCREENS
import LoginScreen from '../Screens/LoginScreen'
import RegisterScreen from '../Screens/RegisterScreen'
import DetailsScreen from '../Screens/DetailsScreen'
import CheckoutScreen from '../Screens/CheckoutScreen'
import VehiclesScreen from '../Screens/VehiclesScreen'
import TimeRentScreen from '../Screens/TimeRentScreen'

const Stack = createStackNavigator()

const MainStackNavigation = () => {

    const screenOptionsStyles = {
        tabBarShowLabel: 'false',
    }

    return (
        <Stack.Navigator 
            screenOptions={screenOptionsStyles}
        >
            <Stack.Screen 
                name="Vehicles"
                component={VehiclesScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name="Login"
                component={LoginScreen}
            />
            <Stack.Screen 
                name="Register"
                component={RegisterScreen}
            />
            <Stack.Screen 
                name="Details"
                component={DetailsScreen}
            />
            <Stack.Screen 
                name="Checkout"
                component={CheckoutScreen}
            />
            <Stack.Screen 
                name="TimeRent"
                component={TimeRentScreen}
            />
        </Stack.Navigator>
    )
}

export default MainStackNavigation