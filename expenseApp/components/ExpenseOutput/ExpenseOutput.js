import { FlatList, View } from 'react-native'
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

function ExpenseOutput({ expenses }) {
    return (
        <View>
            <ExpensesSummary />
            <ExpensesList />
        </View>
    )
}

export default ExpenseOutput;
