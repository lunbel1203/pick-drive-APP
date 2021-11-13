import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import styles from './styles';

const CustomButtom = ( props ) => {

    const { buttonTitle, background, textColor } = props;

    return (
        <TouchableOpacity style={{ paddingVertical: 10 }} onPress={ () => navigation.navigate(route) }>
            <View style={[ styles.containerButton, { backgroundColor: background } ]}>
                <Text style={[ styles.buttonText, { color: textColor } ]}>
                    { buttonTitle }
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default CustomButtom;