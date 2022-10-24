import { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native'
import Input from './Input';
import Button from '../UI/Button';

function ExpenseForm({ submitButtonLabel, onCancel, onSubmit, }) {
    const [inputValues, setAmountValues] = useState({
        amount: '',
        date: '',
        description: ''
    })

    function inputChangeHandler(inputIdentifier, enteredAmount) {
        setAmountValues((curInputValue) => {
            return {
                ...curInputValue,
                [inputIdentifier]: enteredAmount
            }
        })

    }

    function submitHandler() {

    }
    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputsRow}>
                <Input

                    label="Amount"
                    textInputConfig={{
                        keyboardType: "decimal-pad",
                        onChangeText: inputChangeHandler.bind(this, 'amount'),
                        value: inputValues.amount,

                    }} />
                <Input
                    label="Date" textInputConfig={{
                        placeholder: 'YYYY-MM-DD',
                        maxLength: 10,
                        onChangeText: inputChangeHandler.bind(this, 'date'),
                        value: inputValues.date,
                    }} />
            </View>
            <Input style={styles.inputs}
                label="Description" textInputConfig={{
                    multiline: true,
                    // autoCapitalize: 'none',
                    // autoCorrect: false //default is true
                    onChangeText: inputChangeHandler.bind(this, 'description'),
                    value: inputValues.description,
                }} />
            <View style={styles.buttons}>
                <Button style={styles.button} mode='flat' onPress={onCancel}>
                    Cancel
                </Button>
                <Button style={styles.button} onPress={submitHandler}>
                    {submitButtonLabel}
                </Button>
            </View>
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
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    button: {
        minWidth: 200,
        marginHorizontal: 8
    },
})