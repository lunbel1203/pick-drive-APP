import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'

const Checkout = ({ navigation }) => {
    return (
        <View style={ styles.container }>
            <Text>Checkout</Text>
            <TouchableHighlight 
                onPress={() => navigation.navigate('Thanks') }
            >
                <Text>Pagar</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Checkout