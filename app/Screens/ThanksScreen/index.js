import React from 'react'
import { Text, View } from 'react-native'

import styles from './styles'

const Thanks = () => {
    return (
        <View style={ styles.container }>
            <View style={ styles.box }>
                <Text style={ styles.msg }>Gracias por confiar en nosotros, uno de nuestros agentes le estará contactando en las próximas horas.</Text>
            </View>
        </View>
    )
}

export default Thanks