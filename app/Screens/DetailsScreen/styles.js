import { StyleSheet, Dimensions } from 'react-native';

// COLORS
import Colors from '../../Styles/Colors';

const { colorMamey, colorGris } = Colors;

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    titlePrice: {
        marginTop: 20
    },
    descriptions: {
        width: WIDTH - 30,
        paddingVertical: 10,
    },
    cardTitle: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    cardPrice: {
        fontSize: 25,
        color: colorMamey,
    },
    blocks: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    subTitle: {
        width: '100%',
        fontSize: 20,
        color: colorMamey
    },
    items: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: colorGris,
    },
    item: {
        width: '50%',
        marginVertical: 10,
    },
});

export default styles;