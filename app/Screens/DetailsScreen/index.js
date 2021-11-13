import React from 'react';
import { Text, View, ScrollView } from 'react-native';

// COMPONENTS
import Slider from '../../Components/Slider';
import CustomButtom from '../../Components/CustomButtom';

// STYLES
import styles from './styles'
import Colors from '../../Styles/Colors';

const images = [
    'http://localhost:1337/uploads/large_2019_Chevrolet_Cruze_LT_RS_Front_Right_06_22_2021_140c4cd71b.jpg',
    'http://localhost:1337/uploads/small_toyota_corrolla_2021_4be0d3b0d8.jpg'
]

const Details = ( props ) => {

    const { navigation } = props;

    const { colorMamey, colorGris } = Colors;

    return (
        <View style={ styles.container }>
            <Slider images={ images } />
            <ScrollView>
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
            <CustomButtom
                width={'80%'}
                buttonTitle="Rental"
                images={images}
                route="TimeRent"
                navigation={ navigation }
                background={ colorMamey }
                textColor="white"
            />
        </View>
    )
}

export default Details