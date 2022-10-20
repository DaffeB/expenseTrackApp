import { createContext, useReducer, useState } from "react";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2022-10-03')
    },
    {
        id: 'e2',
        description: 'A pair of trousers',
        amount: 99.99,
        date: new Date('2022-10-05')
    },
    {
        id: 'e3',
        description: 'Some bananas',
        amount: 5.99,
        date: new Date('2022-09-10')
    },
    {
        id: 'e4',
        description: 'A book',
        amount: 14.99,
        date: new Date('2022-02-19')
    },
    {
        id: 'e5',
        description: 'Another book',
        amount: 18.99,
        date: new Date('2022-02-22')
    },
    {
        id: 'e6',
        description: 'Laptop',
        amount: 800.79,
        date: new Date('2022-04-02')
    },
    {
        id: 'e7',
        description: 'Phone',
        amount: 499.99,
        date: new Date('2022-06-11')
    },
    {
        id: 'e8',
        description: 'Rice',
        amount: 2.99,
        date: new Date('2022-09-12')
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

    return <ExpenseContext.Provider>{children}</ExpenseContext.Provider>

}

export default ExpensesContextProvider;