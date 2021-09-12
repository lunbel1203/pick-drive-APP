import React from 'react'
import { Text, View } from 'react-native'

import styles from './styles'

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.subTitle}>Buscador</Text>
        </View>
    )
}

export default Header