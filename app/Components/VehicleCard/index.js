import React from 'react';
import { Text, View, Image } from 'react-native';

// STYLES
import styles from './styles';
import Colors from '../../Styles/Colors';

// COMPONENTS
import CustomButtom from '../CustomButtom'
import Price from './Price';

const VehicleCard = ( item ) => {

    const { navigation } = item;
    
    const { id, name, price, image, images } = item.item
    const { colorMamey, colorGris } = Colors;

    return (
        <View style={styles.container}>
            <Image style={styles.featureImage} source={{ uri: `${image}` }} />
            <View style={styles.info}>
                <Text style={ styles.title }>{ name }</Text>
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