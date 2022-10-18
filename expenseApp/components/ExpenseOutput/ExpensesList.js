import { FlatList } from "react-native";
import { Text } from 'react-native'

function renderExpensesItem(itemData) {
    return <Text>
        {itemData.item.description}
    </Text>
}

function ExpensesList({ expenses }) {
    return <FlatList
        data={expenses}
        renderItem={renderExpensesItem}
        keyExtractor={(item) => item.id}
    />

}

export default ExpensesList;