import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import ExpenseOutput from '../components/ExpenseOutput/ExpenseOutput';
import LoadingOverlary from '../components/UI/LoadingOverlay';
import ErrorOverlay from '../components/UI/ErrorOverlay';
import { ExpenseContext } from '../store/expenses-context';
import { getDateMinusDays } from '../util/date';
import { fetchExpenses } from '../util/http';

function RecentExpense() {
    const [isFetching, setIsFetching] = useState(true)

    const [error, setError] = useState()
    const expensesCtx = useContext(ExpenseContext)



    useEffect(() => {
        async function getExpenses() {
            setIsFetching(true)
            try {
                const expenses = await fetchExpenses();
                expensesCtx.setExpenses(expenses);
            } catch (error) {
                setError("Could not fetch expenses!")
            }
            setIsFetching(false)
        }
        getExpenses();
    }, [])



    if (error && !isFetching) {
        return <ErrorOverlay message={error} />
    }

    if (isFetching) {
        return <LoadingOverlary />
    }

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