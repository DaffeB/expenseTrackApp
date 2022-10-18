import { View, Text } from 'react-native'
import React from 'react'
import ExpenseOutput from '../components/ExpenseOutput/ExpenseOutput';

function RecentExpense() {
    return (
        <View>
            <ExpenseOutput expensesPeriod='Last 7 days' />
        </View>
    )
}

export default RecentExpense;