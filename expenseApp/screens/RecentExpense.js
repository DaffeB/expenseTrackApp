import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import ExpenseOutput from '../components/ExpenseOutput/ExpenseOutput';
import { ExpenseContext } from '../store/expenses-context';
import { getDateMinusDays } from '../util/date';
import { fetchExpenses } from '../util/http';

function RecentExpense() {
    // const expensesCtx = useContext(ExpenseContext)

    useEffect(() => {
        async function getExpenses() {
            const expenses = await fetchExpenses();
        }
        getExpenses();
    }, [])

    const recentExpenses = expensesCtx.expenses.filter((expense) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);
        return (expense.date >= date7DaysAgo) && (expense.date <= today);
    })


    return (
        <View>
            <ExpenseOutput
                expenses={recentExpenses}
                expensesPeriod='Last 7 days'
                fallBackText="No expenses registered" />
        </View>
    )
}

export default RecentExpense;