import { View, ActivityIndicator, StyleSheet } from 'react-native'

function LoadingOverlary() {
    return <View style={styles.container}>
        <ActivityIndicator size="large" color="white" />
    </View>

}

export default LoadingOverlary



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24
    }
})