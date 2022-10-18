import { View, Text } from 'react-native'
import React from 'react'
import ExpenseOutput from '../components/ExpenseOutput/ExpenseOutput';

function AllExpenses() {
    return (
        <View>
            <ExpenseOutput expensesPeriod='Total' />
        </View>
    )
}

export default AllExpenses;