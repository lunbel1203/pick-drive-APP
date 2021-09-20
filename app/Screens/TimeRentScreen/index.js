import React, { useState } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { Calendar } from 'react-native-calendars';

// COMPONENTS
import CustomButtom from '../../Components/CustomButtom';

// STYLES
import styles from './styles'
import Colors from '../../Styles/Colors';

const { colorMamey } = Colors

const TimeRentScreen = ({navigation}) => {
    const [items, setItems] = useState([])

    return (
        <View style={ styles.container }>
            <View style={ styles.box }>
                <Text style={ styles.msg }>Selecciona la fecha</Text>
                <SafeAreaView style={ styles.safe }>
                <Calendar
                    style={ styles.calenda }
                    markingType={'period'}
                    markedDates={{
                        '2012-05-15': {marked: true, dotColor: '#50cebb'},
                        '2012-05-16': {marked: true, dotColor: '#50cebb'},
                        '2012-05-21': {startingDay: true, color: '#50cebb', textColor: 'white'},
                        '2012-05-22': {color: '#70d7c7', textColor: 'white'},
                        '2012-05-23': {color: '#70d7c7', textColor: 'white', marked: true, dotColor: 'white'},
                        '2012-05-24': {color: '#70d7c7', textColor: 'white'},
                        '2012-05-25': {endingDay: true, color: '#50cebb', textColor: 'white'}
                    }}
                    theme={{
                        agendaTodayColor: 'red',
                    }}
                />
                </SafeAreaView>
            </View>
            <View style={ styles.wrapButton }>
                <CustomButtom
                    width={'80%'}
                    buttonTitle="Siguiente >"
                    route="Checkout"
                    navigation={ navigation }
                    background={ colorMamey }
                    textColor="white"
                />
            </View>
        </View>
    )
}

export default TimeRentScreen;