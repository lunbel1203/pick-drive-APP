import React from 'react';
import { ImageBackground } from 'react-native';

import styles from './styles';

const BackgroundImage = ({ children, urlImage }) => {
    return (
        <ImageBackground source={ urlImage } resizeMode='cover' style={styles.container}>
            {children}
        </ImageBackground>
    )
}

export default BackgroundImage;