import { useState } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native'
import Input from './Input';
import Button from '../UI/Button';
import getFormattedDate from '../../util/date';
import { GlobalStyles } from '../../constants/styles';


function ExpenseForm({ submitButtonLabel, onCancel, onSubmit, defaultValues }) {
    const [inputs, setInputs] = useState({
        amount: {
            value: defaultValues ? defaultValues.amount.toString() : '',
            isValid: true, // we add this because we dont se error message at the start
            // isValid: !!defaultValues
            // isValid: defaultValues ? true : false, ///this forms is valid too
        },
        date: {
            value: defaultValues ? getFormattedDate(defaultValues.date) : '',
            isValid: true,
            // isValid: defaultValues ? true : false
        },
        description: {
            value: defaultValues ? defaultValues.description : '',
            isValid: true,
            // isValid: defaultValues ? true : false
        }


        // amount: defaultValues ? defaultValues.amount.toString() : '',
        // date: defaultValues ? getFormattedDate(defaultValues.date) : '',
        // description: defaultValues ? defaultValues.description : ','
    })

    // console.log(inputIdentifier)
    // console.log({
    //     [inputIdentifier]:
    // {
    //     value: enteredValue,
    //     isValid: true
    // }
    // })
    function inputChangeHandler(inputIdentifier, enteredValue) {
        setInputs((curInputs) => {
            return {
                ...curInputs,
                [inputIdentifier]:
                {
                    value: enteredValue,
                    isValid: true
                }
            }
        })

    }

    function submitHandler() {

        const expenseData = {
            amount: + inputs.amount.value,
            date: new Date(inputs.date.value),
            description: inputs.description.value
        }

        const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
        const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
        const descriptionValid = expenseData.description.trim().length > 0;


        if (!amountIsValid || !dateIsValid || !descriptionValid) {
            // Alert.alert('Invalid input', 'Please check your input values')
            setInputs((curInputs) => {
                return {
                    amount:
                    {
                        value: curInputs.amount.value,
                        isValid: amountIsValid
                    },

                    date:
                    {
                        value: curInputs.date.value,
                        isValid: dateIsValid
                    },

                    description:
                    {
                        value: curInputs.description.value,
                        isValid: descriptionValid
                    }
                }
            })
            return;
        }

        onSubmit(expenseData);

    }



    const formIsInvalid =
        !inputs.amount.isValid ||
        !inputs.date.isValid ||
        !inputs.description.isValid;


    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputsRow}>
                <Input
                    label="Amount"
                    invalid={!inputs.amount.isValid}
                    textInputConfig={{
                        keyboardType: "decimal-pad",
                        onChangeText: inputChangeHandler.bind(this, 'amount'),
                        value: inputs.amount.value,

                    }} />
                <Input
                    label="Date"
                    invalid={!inputs.date.isValid}
                    textInputConfig={{
                        placeholder: 'YYYY-MM-DD',
                        maxLength: 10,
                        onChangeText: inputChangeHandler.bind(this, 'date'),
                        value: inputs.date.value,
                    }}
                />

            </View>
            <Input
                style={styles.inputs}
                label="Description"
                invalid={!inputs.description.isValid}
                textInputConfig={{
                    multiline: true,
                    // autoCapitalize: 'none',
                    // autoCorrect: false //default is true
                    onChangeText: inputChangeHandler.bind(this, 'description'),
                    value: inputs.description.value,
                }}
            />
            {formIsInvalid && (
                <Text style={styles.errorText}>Invalid input values. {'\n'} Please
                    check your entered data!</Text >
            )}
            <View style={styles.buttons}>
                <Button style={styles.button} mode='flat' onPress={onCancel}>
                    Cancel
                </Button>
                <Button style={styles.button} onPress={submitHandler}>
                    {submitButtonLabel}
                </Button>
            </View>
        </View >
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
    errorText: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        color: GlobalStyles.colors.error500,
        margin: 8

    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'

    },
    button: {
        minWidth: 200,
        marginHorizontal: 8
    },
})