import React, { useEffect, useState } from 'react';
import {
    View, TextInput,
    Image,
} from 'react-native';
import axios from 'axios';

// STYLES
import styles from './styles';

// COMPONENTS
import BackgroundImage from '../../Components/BackgroundImage';
import CustomStatusBar from '../../Components/CustomStatusBar';

import logo from '../../Assets/img/pick-drive-logo.png';

const RegisterScreen = () => { 

    const [Settings, setSettings] = useState([])
    const [Background, setBackground] = useState('')

    useEffect(() => {
        getSettings();
        handlerRegister();
    }, [])

    const getSettings = () => {
        axios.get(`${BASE_URL}/configuraciones`)
        .then(response => {
            setSettings(response.data);
            setBackground(response.data.Fondo)
        }) 
        .catch(error => {
            console.log(error);
        })
    }

    const handlerRegister = () => {
        axios
            .post(`${BASE_URL}/auth/local/register`, {
                username: 'lunbel',
                email: 'user@lunbel.com',
                password: 'strapiPassword',
            })
            .then(response => {
                // Handle success.
                console.log('Well done!');
                console.log('User profile', response.data.user);
                console.log('User token', response.data.jwt);
            })
            .catch(error => {
                // Handle error.
                console.log('An error occurred:', error.response);
            });
    }

    if (!Settings) { 
        return null;
    }
    
    return (
        <BackgroundImage 
            urlImage={{ uri: BASE_URL + Background.url }}
        >
            <CustomStatusBar customStyle="light-content" />
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

export default RegisterScreen;