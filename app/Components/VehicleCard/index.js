import React from 'react';
import { Text, View, Image } from 'react-native';

// STYLES
import styles from './styles';
import Colors from '../../Styles/Colors';

// COMPONENTS
import CustomButtom from '../CustomButtom'
import Price from './Price';

const VehicleCard = ( vehicle ) => {

    const { navigation } = vehicle;
    
    const { id, Titulo, price, Destacada, images } = vehicle;
    const { colorMamey, colorGris } = Colors;

    return (
        <View style={styles.container}>
            <Image style={styles.featureImage} source={{ uri: `${Destacada}` }} />
            <View style={styles.info}>
                <Text style={ styles.title }>{ Titulo }</Text>
                <View style={ styles.detailPrice }>
                    <CustomButtom 
                        width="60%"
                        buttonTitle="Ver detalles" 
                        images={ images }
                        navigation={ navigation } 
                        route="Details"
                        background="white"
                        textColor={ colorGris }
                        id={ id }
                    />
                    <Price price={ price } />
                </View>
            </View>
        </View>
    )
}

export default VehicleCard