import { createContext, useReducer, useState } from "react";



export const ExpenseContext = createContext({
    expenses: [],
    addExpense: ({ description, amount, date }) => { },
    setExpenses: (expenses => { }),
    deleteExpense: (id) => { },
    updateExpense: (id, { description, amount, date }) => {

    }
})

function expensesReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            return [action.payload, ...state]
        case ' SET':
            // return action.payload;
            const inverted = action.payload.reverse()
            return inverted;
        case 'UPDATE':

            const updateableExpenseIndex = state.findIndex(
                (expense) => expense.id === action.payload.id
            );
            const updateableExpense = state[updateableExpenseIndex]
            const updatedItem = { ...updateableExpense, ...action.payload.data }
            state[updateableExpenseIndex] = updatedItem;
            const newArray = [...state]
            return newArray;
        case 'DELETE':
            return state.filter((expense) => expense.id !== action.payload)
        default:
            return state

    }
}

function ExpensesContextProvider({ children }) {
    const [expensesState, dispatch] = useReducer(expensesReducer, []);

    function addExpense(expenseData) {
        dispatch({ type: 'ADD', payload: expenseData })
    }

    function setExpenses(expenses) {
        dispatch({ type: 'SET', payload: expenses })
    }

    function deleteExpense(id) {
        dispatch({ type: 'DELETE', payload: id })
    }

    function updateExpense(id, expenseData) {
        dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } })
    }

    const value = {
        expenses: expensesState,
        setExpenses: setExpenses,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense
    }
    return <ExpenseContext.Provider
        value={value}>
        {children}
    </ExpenseContext.Provider>

}

export default ExpensesContextProvider;