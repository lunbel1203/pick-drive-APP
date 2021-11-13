import React, { useEffect, useState } from 'react';
import {
    View, TextInput,
    Image,
    StatusBar, 
} from 'react-native';

// STYLES
import styles from './style'

// COMPONENTS
import BackgroundImage from '../../Components/BackgroundImage';
import CustomStatusBar from '../../Components/CustomStatusBar';
import CustomButtom from '../../Components/CustomButtom';

// LOGO
import logo from '../../Assets/img/pick-drive-logo.png';
import axios from 'axios';

const BASE_URL = 'http://localhost:1337';

const LoginScreen = ({ navigation }) => { 

    const [Settings, setSettings] = useState([])
    const [Background, setBackground] = useState('')

    useEffect(() => {
        getSettings();
        login();
    }, [])

    const getSettings = () => {
        axios.get(`${BASE_URL}/configuraciones-apps/1`)
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

    const login = () => {
        axios
            .post('http://localhost:1337/auth/local', {
                identifier: 'jlbeltre1203@gmail.com',
                password: '@Lunbel1203',
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
            <CustomButtom
                width={'80%'}
                buttonTitle="Iniciar sesión"
                route="TimeRent"
                navigation={ navigation }
                // background={ colorMamey }
                textColor="white"
            />
        </BackgroundImage> 
    );
}

export default LoginScreen;