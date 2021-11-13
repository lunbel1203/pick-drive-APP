import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'

const CustomButton = (props) => {

    const { buttonTitle } = props;

    return (
        <TouchableHighlight>
            <View style={ styles.container }>
                <Text style={ styles.buttonText }>
                    { buttonTitle }
                </Text>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        paddingHorizontal: 50,
        paddingVertical: 15,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#f5f5f5',
        shadowOpacity: 0.06,
        shadowOffset: {
            width: 10,
            height: 10,            
        },
        elevation: 3,
        borderWidth: 2,
        borderColor: '#D96F32',
        backgroundColor: 'white',
    },
    buttonText: {
        fontSize: 16,
    }
})

export default CustomButton;