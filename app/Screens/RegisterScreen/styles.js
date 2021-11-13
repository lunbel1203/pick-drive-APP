import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        width: width,
        height: height,
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        paddingLeft: 15,
        paddingRight: 15,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 250,
        height: 150,
        marginBottom: 50
    },
    inputs: {
        width: width - 30,
        height: 50,
        paddingLeft: 15,
        paddingRight: 15,
        marginVertical: 10,
        backgroundColor: '#fff',
        borderRadius: 5
    }
});

export default styles;