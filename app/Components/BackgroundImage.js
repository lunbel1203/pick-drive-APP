import React from 'react';
import { 
    StyleSheet, ImageBackground,
    Dimensions, 
} from 'react-native';

const BackgroundImage = ({ children, urlImage }) => {
    return (
        <ImageBackground source={ urlImage } resizeMode='cover' style={styles.container}>
            {children}
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default BackgroundImage;