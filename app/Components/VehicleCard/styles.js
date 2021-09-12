import { StyleSheet } from 'react-native';

import Colors from '../../Styles/Colors';

const { colorMamey, colorNaranja, colorGris, colorNegro } = Colors;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 20,
        shadowColor: '#f5f5f5',
        shadowOpacity: 0.06,
        shadowOffset: {
            width: 10,
            height: 10
        },
        elevation: 3
    },
    featureImage: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    info: {
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    detailPrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        fontSize: 25, 
    },
    buttonText: {
        fontSize: 30,
        color: colorMamey,
    }
})

export default styles;