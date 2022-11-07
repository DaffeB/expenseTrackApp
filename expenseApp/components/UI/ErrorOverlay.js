import { StyleSheet, Text, View } from "react-native";

const ErrorOverlay = ({ message }) => (
    <View style={[styles.container, styles.horizontal]}>
        <Text style={[styles.text, styles.title]}>An error occured!</Text>
        <Text style={styles.text}>{message}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "center",
        backgroundColor: '#9DB4C0',

    },
    horizontal: {
        flexDirection: "column",


    },
    text: {
        textAlign: 'center',
        marginBottom: 8,
        color: 'white'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    }
});

export default ErrorOverlay;




