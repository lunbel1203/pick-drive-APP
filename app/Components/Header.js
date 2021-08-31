import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.subTitle}>Buscador</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
    },
    subTitle: {
        fontSize: 25,
    }
})

export default Header