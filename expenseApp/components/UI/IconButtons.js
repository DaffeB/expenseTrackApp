import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const IconButtons = ({ onPress, icon }) => {
    return (
        <Pressable onPress={onPress}
            style={({ pressed }) => pressed && styles.pressed}>
            <View style={styles.buttonContainer}>
                <Text style={styles.namme}>Go</Text>
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
        color: 'white'
    }
})