import { View } from 'react-native'
import Input from './Input';

function ExpenseForm() {
    function amountChangeHnadler() {

    }
    return (
        <View>
            <Input label="Amount" textInputConfig={{
                keyboardType: "decimal-pad",
                onChangeText: amountChangeHnadler,

            }} />
            <Input label="Date" textInputConfig={{

            }} />
            <Input label="Description" />
        </View>
    )

}

export default ExpenseForm;