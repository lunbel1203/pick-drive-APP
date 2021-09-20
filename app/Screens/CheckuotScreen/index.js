import React from 'react'
import { Text, View } from 'react-native'

import CustomButtom from '../../Components/CustomButtom';

import Colors from '../../Styles/Colors';

const { colorMamey } = Colors

import styles from './styles'

const Checkout = ({ navigation }) => {

    return (
        <View style={ styles.container }>
            <Text>Checkout</Text>
            <CustomButtom
                width={'80%'}
                buttonTitle="Pagar"
                route="Thanks"
                navigation={ navigation }
                background={ colorMamey }
                textColor="white"
            />
        </View>
    )
}

export default Checkout