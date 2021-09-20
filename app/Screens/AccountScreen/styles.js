import { StyleSheet } from 'react-native';

import Colors from '../../Styles/Colors';

const { colorMamey, colorNegro } = Colors;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerProgile: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'white',
        borderBottomRightRadius: 200,
        borderBottomLeftRadius: 200,
        marginBottom: 30,
        shadowColor: '#f5f5f5',
        shadowOpacity: 0.06,
        shadowOffset: {
            width: 10,
            height: 10
        },
        elevation: 3
    },
    photo: {
        width: 130,
        height: 130,
        backgroundColor: '#f5f5f5',
        borderRadius: 100,
        marginBottom: 20,
        shadowColor: '#f5f5f5',
        shadowOpacity: 0.06,
        shadowOffset: {
            width: 10,
            height: 10
        },
        elevation: 3
    },
    photoImg: {
        width: '100%', 
        height: '100%', 
        borderRadius: 50,
        resizeMode: 'cover',
    },
    name: {
        color: colorMamey
    },
    textName: {
        color: colorMamey,
        fontSize: 16
    },
    bodyProfile: {
        flex: 2,
        marginHorizontal: 15
    },
    infoProfile: {
        flex: 1,
    },
    titleSection: {
        fontSize: 20,
        color: colorMamey,
        marginVertical: 10,
    },
    blocks: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        marginVertical: 5,
    },
    itemTitle: {
        flex: 1,
        fontSize: 15,
    },
    itemDecripcion: {
        flex: 2,
        fontSize: 15,
        fontWeight: '500',
        color: colorNegro,
    },
    security: {
        marginVertical: 5,
    },
    itemOnly: {
        width: '100%',
    }
})

export default styles;