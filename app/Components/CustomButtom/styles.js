import { StyleSheet } from 'react-native';

import Colors from '../../Styles/Colors';

const { colorMamey, colorNaranja, colorGris, colorNegro } = Colors;

const styles = StyleSheet.create({
    containerButton: {
        justifyContent: 'center',
        paddingHorizontal: 50,
        paddingVertical: 15,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#f5f5f5',
        shadowOpacity: 0.06,
        shadowOffset: {
            width: 10,
            height: 10,            
        },
        elevation: 3,
        borderWidth: 2,
        borderColor: colorMamey,
        marginBottom: 10
    },
    buttonText: {
        fontSize: 16,
    }
})

export default styles;