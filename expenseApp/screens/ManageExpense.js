import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React, { useContext, useLayoutEffect } from 'react'
import { Image } from 'react-native';
import { GlobalStyles } from '../constants/styles';
import Button from '../components/UI/Button';
import { ExpenseContext } from '../store/expenses-context';
import ExpenseForm from '../components/ManageExpense/ExpenseForm';

function ManageExpense({ route, navigation }) {
    const expensesCtx = useContext(ExpenseContext)

    const editedExpenseId = route.params?.expenseId;

    const isEditing = !!editedExpenseId


    const selectedExpense = expensesCtx.expenses.find(
        (expense => expense.id === editedExpenseId))

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        })

    }, [navigation, isEditing])

    function deleteExpenseHandler() {
        expensesCtx.deleteExpense(editedExpenseId);
        navigation.goBack();
    }

    function cancelHandler() {
        navigation.goBack();
    }



    function confirmHandler(expenseData) {
        if (isEditing) {
            expensesCtx.updateExpense(editedExpenseId, expenseData)
        } else {
            expensesCtx.addExpense(expenseData)
        }
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <ExpenseForm
                submitButtonLabel={isEditing ? 'Update' : "Add"}
                onSubmit={confirmHandler}
                onCancel={cancelHandler}
                defaultValues={selectedExpense}
            />

            {isEditing && (
                <View style={styles.deleteContainer}>
                    <TouchableOpacity
                        onPress={deleteExpenseHandler}>
                        <Image
                            style={styles.trashIcon}
                            source={require('../assets/icons/trash-can.png')}
                        />
                    </TouchableOpacity>
                </View>
            )}
        </View>
    )
}

export default ManageExpense;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800

    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center'
    },
    trashIcon: {
        width: 30,
        height: 30,
        opacity: 0.7
    }

})