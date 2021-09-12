import React, { useState } from 'react';
import { View, Image, ScrollView } from 'react-native';

import styles from './styles';

const Slider = ({ images }) => {
    const [imgActive, setImgActive] = useState(0)

    const onChancheImage = (nativeEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
            if (slide != imgActive) {
                setImgActive(slide)   
            }
        }
    }

    return(
        <View style={ styles.container }>
            <View style={styles.wrap}>
                <ScrollView 
                    onScroll={({ nativeEvent }) => onChancheImage(nativeEvent)}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    horizontal
                    style={styles.wrap}
                >   
                    {
                        images.map((e, index) => 
                            <Image 
                                key={e}
                                resizeMode='stretch'
                                style={styles.wrap}
                                source={{uri: e}}
                            />
                        )
                    }
                </ScrollView>
            </View>
            <View style={styles.wrapDot}>
                {
                    images.map((e, index) => 
                    <View 
                        key={e}
                        style={imgActive == index ? styles.dotActive : styles.dot }
                    ></View>)
                }
            </View>
        </View>
    )
}

export default Slider;