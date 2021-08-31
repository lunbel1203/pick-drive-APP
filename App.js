import React from 'react';
import { StatusBar } from 'react-native'
import Navigation from './App/Navigations/Navigation';

// CONTEXT
import { ThemeProvider } from './App/Context/ThemeContext';

const App = () => {
    return(
        <ThemeProvider>
            <StatusBar barStyle="dark-content" />
            <Navigation />
        </ThemeProvider>
    )
}

export default App