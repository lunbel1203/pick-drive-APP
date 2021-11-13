import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

// CONTEXT
import styles from './styles';


export function MameyButtom( props ) {
    const { title, onPress } = props;

    return (
        <TouchableOpacity 
            style={{
                ...styles.button,
                backgroundColor: '#fff',
             }}
             onPress={ onPress }
        >
            <Text>{ title }</Text>
        </TouchableOpacity>
    )
}

export const WhiteButtom = ( props ) => {
    const { title } = props;

    return (
        <TouchableOpacity 
            style={styles.buttonContainer}
        >
            <Text style={styles.buttonText}>{ title }</Text>
        </TouchableOpacity>
    )
}