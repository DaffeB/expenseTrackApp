import { FlatList, View, StyleSheet } from 'react-native'
import { GlobalStyles } from '../../constants/styles';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

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



function ExpenseOutput({ expenses, expensesPeriod }) {
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
            <ExpensesList expenses={DUMMY_EXPENSES} />
        </View>
    )
}

export default ExpenseOutput;


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.primary700
    }

})
