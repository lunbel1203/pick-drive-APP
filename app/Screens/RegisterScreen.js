import React, { useEffect, useState } from 'react';
import {
    View, Text, StyleSheet, Dimensions, TextInput, Touchablehightlight,
    Image,
} from 'react-native';
import BackgroundImage from '../Components/BackgroundImage'

import getSettingsApp from '../api/Settings'; 

const { width, height } = Dimensions.get('window');

const base = 'http://localhost:1337';

const LoginScreen = () => { 

    const [Settings, setSettings] = useState([])
    const [Background, setBackground] = useState('')

    useEffect(() => {
        getSettings();
    }, [])

    const getSettings = () => {
        getSettingsApp.get('/configuraciones-apps/1')
        .then(response => {
            setSettings(response.data);
            setBackground(response.data.Fondo)
        }) 
        .catch(error => {
            console.log(error);
        })
    }

    if (!Settings) { 
        return null;
    }
    
    return (
        <BackgroundImage urlImage={{ uri: base + Background.url }}>
            <View style={styles.overlay}>
                <Text style={styles.text}>Register</Text>
            </View>
        </BackgroundImage> 
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        width: width,
        height: height,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        paddingLeft: 15,
        paddingRight: 15
    },
    text: {
        color: '#fff'
    }
});

export default LoginScreen;