import React from 'react';
import { StatusBar } from 'react-native'
import Navigation from './app/Navigations/Navigation';

// CONTEXT
import { ThemeProvider } from './app/Context/ThemeContext';

const App = () => {
    return(
        <ThemeProvider>
            <StatusBar barStyle="dark-content" />
            <Navigation />
        </ThemeProvider>
    )
}

export default App