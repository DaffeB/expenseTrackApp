import { View, StyleSheet, Text } from 'react-native'
import Input from './Input';

function ExpenseForm() {
    function amountChangeHnadler() {

    }
    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputsRow}>
                <Input

                    label="Amount" textInputConfig={{
                        keyboardType: "decimal-pad",
                        onChangeText: amountChangeHnadler,

                    }} />
                <Input
                    label="Date" textInputConfig={{
                        placeholder: 'YYYY-MM-DD',
                        maxLength: 10,
                        onChangeText: () => { }
                    }} />
            </View>
            <Input style={styles.inputs}
                label="Description" textInputConfig={{
                    multiline: true,
                    autoCapitalize: 'none',
                    autoCorrect: false //default is true
                }} />
        </View>
    )

}

export default ExpenseForm;

const styles = StyleSheet.create({
    form: {
        marginTop: 30
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 24,
        textAlign: 'center'

    },
    inputsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    inputs: {
        marginBottom: 120
    }
})