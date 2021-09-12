import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Thanks = () => {
    return (
        <View style={ styles.container }>
            <Text>Thanks</Text>
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

export default Thanks