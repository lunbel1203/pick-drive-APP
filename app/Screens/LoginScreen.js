import React, { useEffect, useState } from 'react';
import {
    View, Text, StyleSheet, Dimensions, TextInput,
    Image
} from 'react-native';

// API
import getSettingsApp from '../api/Settings'; 

// COMPONENTS
import BackgroundImage from '../components/BackgroundImage';

// LOGO
import logo from '../src/img/pick-drive-logo.png'


const { width, height } = Dimensions.get('window');
const base = 'http://localhost:1337';

const LoginScreen = ({ navigation }) => { 

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
        <BackgroundImage 
            urlImage={{ uri: base + Background.url }}
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <Image 
                        style={styles.logo}
                        source={logo} 
                        resizeMode="contain"
                    />
                    <TextInput 
                        style={styles.inputs}
                        placeholder="Usuario" 
                        keboardType="default"
                    />
                    <TextInput 
                        style={styles.inputs}
                        placeholder="Contraseña"
                        keboardType="default"
                        secureTextEntry={true}
                    />
                </View>
            </View>
        </BackgroundImage> 
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        width: width,
        height: height,
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        paddingLeft: 15,
        paddingRight: 15,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 250,
        height: 150,
        marginBottom: 50
    },
    inputs: {
        width: width - 30,
        height: 50,
        paddingLeft: 15,
        paddingRight: 15,
        marginVertical: 10,
        backgroundColor: '#fff',
        borderRadius: 5
    }
});

export default LoginScreen;