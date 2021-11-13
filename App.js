import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';
import MainStackNavigation from './app/Navigations/MainStackNavigation';

// CONTEXT
import { ThemeProvider } from './app/Contexts/ThemeContext';
import { AuthProvider } from './app/Contexts/AuthContext';
import { VehicleProvider } from './app/Contexts/VehicleContext';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    if (isLoading) {
        return (
            <View style={styles.loadingElement}>
                <ActivityIndicator size="large" />
                <Text style={styles.text}>Cargando...</Text>
            </View>
        )
    }

    return(
        <ThemeProvider>
            <AuthProvider>
                <VehicleProvider>
                    <MainStackNavigation />
                </VehicleProvider>
            </AuthProvider>
        </ThemeProvider>
    )
}

const styles = StyleSheet.create({
    loadingElement: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#D98032',
    }, 
    text: {
        fontSize: 20,
        color: '#fff'
    }
})

export default App