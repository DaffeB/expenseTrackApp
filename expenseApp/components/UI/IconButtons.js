import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const IconButtons = ({ onPress, icon }) => {
    return (
        <Pressable onPress={onPress}
            style={({ pressed }) => pressed && styles.pressed}>
            <View style={styles.buttonContainer}>
                <Text icon={icon}>Go</Text>
            </View>
        </Pressable>
    )
}

export default IconButtons

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 24,
        padding: 6,
        margin: 8
    },
    pressed: {
        opacity: 0.75
    }
})