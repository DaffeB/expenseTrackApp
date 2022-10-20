import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import ExpenseOutput from '../components/ExpenseOutput/ExpenseOutput';
import { ExpenseContext } from '../store/expenses-context';

function AllExpenses() {
    const expensesCtx = useContext(ExpenseContext)
    return (
        <View>
            <ExpenseOutput expenses={expensesCtx.expenses} expensesPeriod='Total' />
        </View>
    )
}

export default AllExpenses;