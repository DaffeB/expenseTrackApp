import { createContext, useReducer, useState } from "react";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2022-09-20')
    },
    {
        id: 'e2',
        description: 'A pair of trousers',
        amount: 99.99,
        date: new Date('2022-10-20')
    },
    {
        id: 'e3',
        description: 'Some bananas',
        amount: 5.99,
        date: new Date('2022-10-17')
    },
    {
        id: 'e4',
        description: 'A book',
        amount: 14.99,
        date: new Date('2022-08-20')
    },
    {
        id: 'e5',
        description: 'Another book',
        amount: 18.99,
        date: new Date('2022-10-16')
    },
    {
        id: 'e6',
        description: 'Laptop',
        amount: 800.79,
        date: new Date('2022-10-20')
    },
    {
        id: 'e7',
        description: 'Phone',
        amount: 499.99,
        date: new Date('2022-05-20')
    },
    {
        id: 'e8',
        description: 'Rice',
        amount: 2.99,
        date: new Date('2022-07-20')
    },

]

export const ExpenseContext = createContext({
    expenses: [],
    addExpense: ({ description, amount, date }) => { },
    deleteExpense: (id) => { },
    updateExpense: (id, { description, amount, date }) => { }
})

function expensesReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{ ...action.payload }, ...state]
        case 'UPDATE':
            const updateableExpenseIndex = state.findIndex(
                (expense) => expense.id === action.payload.id
            );
            const updateableExpense = state[updateableExpenseIndex]
            const updatedItem = { ...updateableExpense, ...action.payload.data }
            const updatedExpenses = [...state]
            updatedExpenses[updateableExpense] = updatedItem
            return updatedExpenses;
        case 'DELETE':
            return state.filter((expense) => expense.id !== action.playload)
        default:
            return state

    }
}

function ExpensesContextProvider({ children }) {
    const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

    function addExpense(expenseData) {
        dispatch({ type: 'ADD', payload: expenseData })
    }

    function deleteExpense(id) {
        dispatch({ type: 'DELETE', payload: id })
    }

    function updateExpense(id, expenseData) {
        dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } })
    }

    const value = {
        expenses: expensesState,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense
    }
    return <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>

}

export default ExpensesContextProvider;