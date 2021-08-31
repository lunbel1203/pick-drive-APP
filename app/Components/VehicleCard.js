import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

// CONTEXT
import { ThemeContext } from '../Context/ThemeContext';

// COMPONENTS
import CustomButton from './CustomButton';
import Price from './Price'

const VehicleCard = (item, navigation) => {
    
    const { id, name, price, image } = item.item
    
    const { Colors } = useContext(ThemeContext);

    return (
        <View style={styles.container}>
            <Image style={styles.featureImage} source={{ uri: `${image}` }} />
            <View style={styles.info}>
                <Text style={ styles.title }>{ name }</Text>
                <View style={ styles.detailPrice }>
                    <CustomButton 
                        style={{ flex: 1 }}
                        buttonTitle="Ver detalles"
                        _onPress={navigation}
                    />
                    <Price price={price} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 20,
        // borderBottomLeftRadius: 20,
        // borderBottomRightRadius: 20,
        shadowColor: '#f5f5f5',
        shadowOpacity: 0.06,
        shadowOffset: {
            width: 10,
            height: 10
        },
        elevation: 3
    },
    info: {
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    detailPrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 20,
    },
    featureImage: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default VehicleCard