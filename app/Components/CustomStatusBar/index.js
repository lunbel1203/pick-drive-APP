import React from 'react';
import { View, StatusBar } from 'react-native';

const CustomStatusBar = (props) => {
    return (
        <View>
            <StatusBar barStyle={props.customStyle} />
        </View>
    )
}

export default CustomStatusBar;
