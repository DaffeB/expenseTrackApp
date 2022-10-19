import { Pressable, StyleSheet, Image, View } from 'react-native'
import React from 'react'

const IconButtons = ({ onPress, icon, size, color }) => {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => pressed && styles.pressed}>
            <View style={styles.buttonContainer}>
                <Image style={styles.img} name={icon} size={size} color={color} source={require('../UI/icon/plus.png')} />
            </View>
        </Pressable>
    )
}

export default IconButtons

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 24,
        padding: 6,
        marginHorizontal: 8,
        marginVertical: 2
    },
    pressed: {
        opacity: 0.75
    },
    namme: {
        fontSize: 14,
        color: 'black'
    },
    img: {
        height: 25,
        width: 25
    }

})