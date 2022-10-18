import { FlatList, View } from 'react-native'
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

function ExpenseOutput({ expenses, expensesPeriod }) {
    return (
        <View>
            <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
            <ExpensesList />
        </View>
    )
}

export default ExpenseOutput;
