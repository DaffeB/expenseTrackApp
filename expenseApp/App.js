
import React from 'react';
import { Pressable, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManageExpense from './screens/ManageExpense';
import RecentExpense from './screens/RecentExpense';
import AllExpenses from './screens/AllExpenses';
import { GlobalStyles } from './constants/styles'
import { Image } from 'react-native';
import IconButtons from './components/UI/IconButtons';
import ExpensesContextProvider from './store/expenses-context';


const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpenseOverView() {
  return <BottomTabs.Navigator screenOptions={({ navigation }) => ({
    headerStyle: {
      backgroundColor: GlobalStyles.colors.primary900
    },
    headerTintColor: 'black',
    tabBarStyle: {
      backgroundColor: GlobalStyles.colors.primary900,
    },
    tabBarActiveTintColor: '#9381ff',
    tabBarLabelStyle: {
      fontSize: 13,
      fontWeight: '500'
    },

    headerRight: () =>
    (

      <IconButtons
        onPress={() =>
          navigation.navigate('ManageExpense')}
      />

    )



  })}>


    {/* <BottomTabs.Screen
      name="RecentExpense"
      component={RecentExpense}
      options={({ navigation }) => ({

        // headerRight: () => {
        //   <Pressable onPress={() => navigation.navigate("RecentExpense")}>
        //   </Pressable>
        // }
        headerRight: () =>
        (

          <IconButtons
            onPress={() =>
              navigation.navigate('ManageExpense')}
          />

        )

      })}

      THIS WAS THE FIRST 

    /> */}


    {/* ///// */}


    <BottomTabs.Screen
      name="RecentExpense"
      component={RecentExpense}
      options={
        {
          title: 'Recent Expenses',
          tabBarIcon: () =>
            <Image
              onPress={() => navigation.navigate('ManageExpense')}
              source={require('./assets/icons/sand-clock.png')}
              style={{ width: 20, height: 20 }}
            />

        }
      }

    />


    <BottomTabs.Screen
      name="AllExpenses"
      component={AllExpenses}
      options={
        {
          title: 'All Expenses',
          tabBarIcon: () =>
            <Image
              source={require('./assets/icons/poor.png')}
              style={{ width: 20, height: 20 }}
            />

        }
      }

    />
  </BottomTabs.Navigator>
}

const App = () => {

  return (
    <>
      <StatusBar style='auto' />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: GlobalStyles.colors.primary900
              }
            }}

          >
            <Stack.Screen
              name="ExepensesOverview"
              component={ExpenseOverView}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen name="ManageExpense" component={ManageExpense}
              options={
                {
                  presentation: 'modal'
                }
              } />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }

});

export default App;
