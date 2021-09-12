import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

const Price = (price) => {

    const rentPrice = price.price;

    return (
        <View>
            <Text 
                style={ styles.buttonText }
            >{`$ ${rentPrice}/día`}</Text>
        </View>
    )
}

export default Price;