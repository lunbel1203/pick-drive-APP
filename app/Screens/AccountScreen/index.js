import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';

import styles from './styles';

const AccountScreen = () => {
    return (
        <View style={ styles.container }>
            <View style={ styles.headerProgile }>
                <View style={ styles.photo }>
                    <Image style={ styles.photoImg } source={require('../../Assets/img/beltre.jpeg')} />
                </View>
                <View style={ styles.name }>
                    <Text style={ styles.textName }>Jhon Doe</Text>
                </View>
            </View>
            <ScrollView>
                <View style={ styles.bodyProfile }>
                    <View style={ styles.infoProfile }>
                        <Text style={ styles.titleSection }>
                            Información personal
                        </Text>
                        <View style={ styles.blocks }>
                            <Text style={ styles.itemTitle }>Nombre:</Text>
                            <Text style={ styles.itemDecripcion }>Jose Luis Beltre</Text>
                        </View>
                        <View style={ styles.blocks }>
                            <Text style={ styles.itemTitle }>Email:</Text>
                            <Text style={ styles.itemDecripcion }>lunbel1203@gmail.com</Text>
                        </View>
                        <View style={ styles.blocks }>
                            <Text style={ styles.itemTitle }>Teléfono:</Text>
                            <Text style={ styles.itemDecripcion }>8294274047</Text>
                        </View>
                    </View>
                    <View style={ styles.security }>
                        <Text style={ styles.titleSection }>
                            Seguridad
                        </Text>
                        <Text style={ styles.itemOnly }>
                            Cambiar contraseña
                        </Text>
                    </View>
                    <View style={ styles.infoProfile }>
                        <Text style={ styles.titleSection }>
                            Ayuda
                        </Text>
                        <Text style={ styles.itemOnly }>
                            Soporte
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default AccountScreen