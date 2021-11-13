import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// SCREENS
import LoginScreen from '../Screens/LoginScreen'
import RegisterScreen from '../Screens/RegisterScreen'

const Stack = createStackNavigator()

const StackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Login"
                component={LoginScreen}
            />
            <Stack.Screen 
                name="Register"
                component={RegisterScreen}
            />
        </Stack.Navigator>
    )
}

export default StackNavigation