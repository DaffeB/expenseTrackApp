import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { Image } from 'react-native';
import { GlobalStyles } from '../constants/styles';
import Button from '../components/UI/Button';

function ManageExpense({ route, navigation }) {
    const editedExpenseId = route.params?.expenseId;

    const isEditing = !!editedExpenseId

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        })


    }, [navigation, isEditing])


    function deleteExpenseHandler() {
        navigation.goBack();
    }

    function cancelHandler() {
        navigation.goBack();
    }

    function confirmHandler() {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttons}>
                <Button style={styles.button} mode='flat' onPress={cancelHandler}>Cancel</Button>
                <Button style={styles.button} onPress={confirmHandler}>{isEditing ? 'Update' : 'Add'}</Button>
            </View>

            {isEditing &&
                (
                    <View style={styles.deleteContainer}>
                        <TouchableOpacity onPress={deleteExpenseHandler}>
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
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    button: {
        minWidth: 200,
        marginHorizontal: 8
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