import React, { useState } from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import FontAwesome5 from '@expo/vector-icons';

// STYLES
import styles from './styles'

const image = 'http://localhost:1337/uploads/large_2019_Chevrolet_Cruze_LT_RS_Front_Right_06_22_2021_140c4cd71b.jpg';


const RentedComponent = ( props ) => {

    return (
        <ScrollView>
            <Image 
                resizeMode='stretch'
                style={styles.wrap}
                source={{uri: image}}
            />
            <View style={ styles.titlePrice }>
                <Text style={ styles.cardTitle }>Chevrolet Cruz</Text>
                <Text style={ styles.cardPrice }>$40/día</Text>
            </View>
            <View style={ styles.descriptions }>
                <View style={ styles.blocks }>
                    <Text style={ styles.subTitle }>Características</Text>
                    <Text style={ styles.item }>Sensores</Text>
                    <Text style={ styles.item }>5 asientos</Text>
                    <Text style={ styles.item }>Aire</Text>
                    <Text style={ styles.item }>GPS</Text>
                </View>
                <View style={ styles.blocks }>
                    <Text style={ styles.subTitle }>Otros detalles</Text>
                    <View style={ styles.items }>
                        <Text style={ styles.item }>Color exterior</Text>
                        <Text style={ styles.item }>Blanco</Text>
                    </View>
                    <View style={ styles.items }>
                        <Text style={ styles.item }>Color Interior</Text>
                        <Text style={ styles.item }>Gris con blanco</Text>
                    </View>
                    <View style={ styles.items }>
                        <Text style={ styles.item }>Año</Text>
                        <Text style={ styles.item }>2021</Text>
                    </View>
                    <View style={ styles.items }>
                        <Text style={ styles.item }>Placa</Text>
                        <Text style={ styles.item }>H12345</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const NorentedComponent = () => {
    return (
        <View style={ styles.noRented }>
            <View style={ styles.blockContent }>
                <Image style={ styles.closeIcon } source source={require('../../Assets/img/close.png')} />
                <Text style={ styles.rentedText }>No tienes vehículos rentados</Text>
            </View>
        </View>
    )
}

const RentedScreen = ( props ) => {
    const [rented, setRented] = useState(true);

    return (
        <View style={ styles.container }>
            { rented ? <RentedComponent /> : <NorentedComponent /> }
        </View>
    )
}

export default RentedScreen;