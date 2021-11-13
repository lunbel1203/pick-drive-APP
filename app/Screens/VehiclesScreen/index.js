import React, {useContext, useState, useeffect} from 'react';
import { View, FlatList, SafeAreaView } from 'react-native';

// STYLES
import styles from './styles';

// COMPONENTS
import Header from '../../Components/Header';
import VehicleCard from '../../Components/VehicleCard';

// CONTEXT
import VehicleContext from '../../Contexts/VehicleContext';

const VehiclesScreen = ({ navigation }) => {

    const {vehicles} = useContext(VehicleContext);
    
    const renderItem = (vehicle) => {
        return (
            <VehicleCard navigation={navigation} vehicle={vehicle} />
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
                data={vehicles}
                renderItem={ renderItem }
                keyExtractor={(vehicle) => vehicle.id.toString()}
                ItemSeparatorComponent={renderSeparator}
            />
        </SafeAreaView>
    )
}

export default VehiclesScreen