import { View, Text } from 'react-native';

function ExpensesSummary({ periodName, expenses }) {
    const expensesSum = expenses.reduce((sum, expenses) => { })
    return (
        <View>
            <Text>{periodName}</Text>
            <Text>$</Text>
        </View>
    )

}

export default ExpensesSummary;