import axios from 'axios';

export function storeExpense(expenseData) {
    axios.post('https://reactnativec-69f74-default-rtdb.europe-west1.firebasedatabase.app/expenses.json',
        expenseData
    )
}

