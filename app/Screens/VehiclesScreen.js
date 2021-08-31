import React, {useState} from 'react'
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native'

// COMPONENTS
import Header from '../components/Header'
import VehicleCard from '../components/VehicleCard'


const VEHICLES = [
    {
        id: 1,
        name: 'Toyota Corolla Hybrid 2021',
        price: 60,
        image: 'http://localhost:1337/uploads/large_2019_Chevrolet_Cruze_LT_RS_Front_Right_06_22_2021_140c4cd71b.jpg'
    },
    {
        id: 2,
        name: 'Chevrolet Cruze 2021',
        price: 40,
        image: 'http://localhost:1337/uploads/small_toyota_corrolla_2021_4be0d3b0d8.jpg'
    },
    {
        id: 3,
        name: 'Nissan 2008',
        price: 20,
        image: 'http://localhost:1337/uploads/large_2019_Chevrolet_Cruze_LT_RS_Front_Right_06_22_2021_140c4cd71b.jpg'
    },
    {
        id: 4,
        name: 'Chevrolet Cruze 2021',
        price: 35,
        image: 'http://localhost:1337/uploads/small_toyota_corrolla_2021_4be0d3b0d8.jpg'
    },
    {
        id: 5,
        name: 'Chevrolet Cruze 2021',
        price: 35,
        image: 'http://localhost:1337/uploads/large_2019_Chevrolet_Cruze_LT_RS_Front_Right_06_22_2021_140c4cd71b.jpg'
    },
    {
        id: 6,
        name: 'Jeep 2016',
        price: 70,
        image: 'http://localhost:1337/uploads/small_toyota_corrolla_2021_4be0d3b0d8.jpg'
    }
]

const VehiclesScreen = () => {

    const renderItem = (item) => {
        return (
            <VehicleCard item={item.item} />
        )
    }

    const renderSeparator = () => {
        return(
            <View 
                style={{
                    height: 1,
                    width: '85%',
                    backgroundColor: 'transparent',
                    margin: 5,
                }}
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 120,
        marginHorizontal: 15,
    }
})

export default VehiclesScreen