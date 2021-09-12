import { StyleSheet, Dimensions } from 'react-native';

// COLORS
import Colors from '../../Styles/Colors';

const { colorMamey } = Colors

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const styles = StyleSheet.create({
    wrap: {
        width: WIDTH,
        height: HEIGHT * 0.25,
    },
    wrapDot: {
        position: 'absolute',
        bottom: 15,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    dotActive: {
        width: 15,
        height: 15,
        margin: 3,
        backgroundColor: colorMamey,
        borderWidth: 2,
        borderColor: colorMamey,
        borderRadius: 50,
    },
    dot: {
        width: 15,
        height: 15,
        margin: 3,
        backgroundColor: 'white',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: colorMamey,
    }
});

export default styles;