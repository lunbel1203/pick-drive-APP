import React, {useState} from 'react';
import { View, FlatList, SafeAreaView } from 'react-native';

// STYLES
import styles from './styles';

// COMPONENTS
import Header from '../../Components/Header';
import VehicleCard from '../../Components/VehicleCard';

const VEHICLES = [
    {
        id: 1,
        name: 'Toyota Corolla Hybrid 2021',
        price: 60,
        image: 'http://localhost:1337/uploads/large_2019_Chevrolet_Cruze_LT_RS_Front_Right_06_22_2021_140c4cd71b.jpg',
        images: [
            'http://localhost:1337/uploads/large_2019_Chevrolet_Cruze_LT_RS_Front_Right_06_22_2021_140c4cd71b.jpg',
            'http://localhost:1337/uploads/small_toyota_corrolla_2021_4be0d3b0d8.jpg'
        ]
    },
    {
        id: 2,
        name: 'Chevrolet Cruze 2021',
        price: 40,
        image: 'http://localhost:1337/uploads/small_toyota_corrolla_2021_4be0d3b0d8.jpg',
        images: [
            'http://localhost:1337/uploads/large_2019_Chevrolet_Cruze_LT_RS_Front_Right_06_22_2021_140c4cd71b.jpg',
            'http://localhost:1337/uploads/small_toyota_corrolla_2021_4be0d3b0d8.jpg'
        ]
    },
    {
        id: 3,
        name: 'Nissan 2008',
        price: 20,
        image: 'http://localhost:1337/uploads/large_2019_Chevrolet_Cruze_LT_RS_Front_Right_06_22_2021_140c4cd71b.jpg',
        images: [
            'http://localhost:1337/uploads/large_2019_Chevrolet_Cruze_LT_RS_Front_Right_06_22_2021_140c4cd71b.jpg',
            'http://localhost:1337/uploads/small_toyota_corrolla_2021_4be0d3b0d8.jpg'
        ]
    },
    {
        id: 4,
        name: 'Chevrolet Cruze 2021',
        price: 35,
        image: 'http://localhost:1337/uploads/small_toyota_corrolla_2021_4be0d3b0d8.jpg',
        images: [
            'http://localhost:1337/uploads/large_2019_Chevrolet_Cruze_LT_RS_Front_Right_06_22_2021_140c4cd71b.jpg',
            'http://localhost:1337/uploads/small_toyota_corrolla_2021_4be0d3b0d8.jpg'
        ]
    },
    {
        id: 5,
        name: 'Chevrolet Cruze 2021',
        price: 35,
        image: 'http://localhost:1337/uploads/large_2019_Chevrolet_Cruze_LT_RS_Front_Right_06_22_2021_140c4cd71b.jpg',
        images: [
            'http://localhost:1337/uploads/large_2019_Chevrolet_Cruze_LT_RS_Front_Right_06_22_2021_140c4cd71b.jpg',
            'http://localhost:1337/uploads/small_toyota_corrolla_2021_4be0d3b0d8.jpg'
        ]
    },
    {
        id: 6,
        name: 'Jeep 2016',
        price: 70,
        image: 'http://localhost:1337/uploads/small_toyota_corrolla_2021_4be0d3b0d8.jpg',
        images: [
            'http://localhost:1337/uploads/large_2019_Chevrolet_Cruze_LT_RS_Front_Right_06_22_2021_140c4cd71b.jpg',
            'http://localhost:1337/uploads/small_toyota_corrolla_2021_4be0d3b0d8.jpg'
        ]
    }
]

const VehiclesScreen = ({ navigation }) => {
    
    const renderItem = (item) => {
        return (
            <VehicleCard navigation={navigation} item={item.item} />
        )
    }

    const renderSeparator = () => {
        return(
            <View 
                style={styles.cardSeparator}
            />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header />  
            <FlatList 
                data={VEHICLES}
                renderItem={ renderItem }
                keyExtractor={(item) => item.id.toString()}
                ItemSeparatorComponent={renderSeparator}
            />
        </SafeAreaView>
    )
}

export default VehiclesScreen