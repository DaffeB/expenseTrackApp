import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { Image } from 'react-native';
import { GlobalStyles } from '../constants/styles';

function ManageExpense({ route, navigation }) {
    const editedExpenseId = route.params?.expenseId;

    const isEditing = !!editedExpenseId

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        })


    }, [navigation, isEditing])


    function deleteExpenseHandler() {

    }


    return (
        <View style={styles.container}>

            {isEditing &&
                (
                    <View style={styles.deleteContainer}>
                        <TouchableOpacity>
                            <Image
                                style={styles.trashIcon}
                                source={require('../assets/icons/trash-can.png')}
                                onPress={deleteExpenseHandler}
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
        backgroundColor: GlobalStyles.colors.primary100

    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center'
    },
    trashIcon: {
        width: 20,
        height: 20,
        opacity: 0.7
    }

})