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
        marginTop: 20,
        marginHorizontal: 15
    },
    descriptions: {
        width: WIDTH - 30,
        paddingVertical: 10,
        marginHorizontal: 15
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
        fontSize: 25,
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
    wrap: {
        width: WIDTH,
        height: HEIGHT * 0.25,
    },
    noRented: {
        flex: 1,
        height: HEIGHT - 600,
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    blockContent: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 30,
        padding: 30,
        margin: 10,
        elevation: 3,
    },
    rentedText: {
        width: '100%',
        fontSize: 25,
        marginTop: 50,
    },
    closeIcon: {
        width: 200,
        height: 200,
        resizeMode: 'stretch',
    }
});

export default styles;