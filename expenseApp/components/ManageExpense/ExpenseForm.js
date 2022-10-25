import { useState } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native'
import Input from './Input';
import Button from '../UI/Button';
import getFormattedDate from '../../util/date';


function ExpenseForm({ submitButtonLabel, onCancel, onSubmit, defaultValues }) {
    const [inputValues, setAmountValues] = useState({
        amount: defaultValues ? defaultValues.amount.toString() : '',
        date: defaultValues ? getFormattedDate(defaultValues.date) : '',
        description: defaultValues ? defaultValues.description : ','
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

        const expenseData = {
            amount: + inputValues.amount,
            date: new Date(inputValues.date),
            description: inputValues.description
        }

        const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
        const dateIsValid = expenseData.date.toString() === 'Invalid Date';
        const descriptionValid = expenseData.description.trim().length > 0;

        if (!amountIsValid || !dateIsValid || descriptionValid) {
            Alert.alert('Invalid input', 'Please check your input values')
            return;
        }

        onSubmit(expenseData);

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