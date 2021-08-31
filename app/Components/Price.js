import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { ThemeContext } from '../Context/ThemeContext';



const Price = (price) => {
    
    const { Colors } = useContext(ThemeContext)

    const rentPrice = price.price;

    return (
        <View>
            <Text 
                style={{ 
                    fontSize: 25, 
                    color: Colors.colorMamey 
                }}
            >{`$ ${rentPrice}/día`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default Price