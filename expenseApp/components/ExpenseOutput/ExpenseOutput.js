import { FlatList, View, StyleSheet, Text } from 'react-native'
import { GlobalStyles } from '../../constants/styles';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';


function ExpenseOutput({ expenses, expensesPeriod, fallBackText }) {

    let content = <Text style={styles.infoText}>{fallBackText}</Text>;

    if (expenses.length > 0) {
        content = <ExpensesList expenses={expenses} />
    }
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
            {content}
            <ExpensesList />
        </View>
    )
}

export default ExpenseOutput;


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        height: '100%',
        backgroundColor: GlobalStyles.colors.primary700
    },
    infoText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 32

    }

})
