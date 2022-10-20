import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import ExpenseOutput from '../components/ExpenseOutput/ExpenseOutput';
import { ExpenseContext } from '../store/expenses-context';
import { getDateMinusDays } from '../util/date';

function RecentExpense() {
    const expensesCtx = useContext(ExpenseContext)

    const recentExpenses = expensesCtx.expenses.filter((expense) => {
        const today = new Date();
        const date7daysago = getDateMinusDays(today, 7);
        return expense.date > date7daysago;
    })

    console.log({ recentExpenses })
    return (
        <View>
            <ExpenseOutput expenses={recentExpenses} expensesPeriod='Last 7 days' />
        </View>
    )
}

export default RecentExpense;