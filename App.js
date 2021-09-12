import React from 'react';
import { StatusBar } from 'react-native'
// import TabNavigation from './app/Navigations/TabNavigation';
import MainStackNavigation from './app/Navigations/MainStackNavigation';

// CONTEXT
import { ThemeProvider } from './app/Context/ThemeContext';

const App = () => {
    return(
        <ThemeProvider>
            <StatusBar barStyle="dark-content" />
            <MainStackNavigation />
        </ThemeProvider>
    )
}

export default App