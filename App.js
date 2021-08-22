import React from 'react';
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

// Screens
import LoginScreen from './screens/Login';
import RegisterScreen from './screens/Register';

const Stack = createNativeStackNavigator();

const App = () => {
    return(
        <NavigationContainer>
            <StatusBar barStyle="light-content" />
            <Stack.Navigator 
                initialRouteName="Login"
                screenOptions={{headerShown: false}}
                headerTintColor="#fff"
            >
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App