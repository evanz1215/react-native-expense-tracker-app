import { View, StyleSheet } from "react-native";

import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "New Shoes",
    amount: 99.99,
    date: new Date("2024-05-11"),
  },
  {
    id: "e2",
    description: "New Shirt",
    amount: 11.99,
    date: new Date("2024-04-13"),
  },
  {
    id: "e3",
    description: "New Pants",
    amount: 39.99,
    date: new Date("2024-03-15"),
  },
  {
    id: "e4",
    description: "New Hat",
    amount: 19.99,
    date: new Date("2024-02-17"),
  },
  {
    id: "e5",
    description: "New Socks",
    amount: 5.99,
    date: new Date("2024-01-19"),
  },
  {
    id: "e6",
    description: "New Underwear",
    amount: 9.99,
    date: new Date("2023-12-21"),
  },
  {
    id: "e7",
    description: "New Jacket",
    amount: 59.99,
    date: new Date("2023-11-23"),
  },
  {
    id: "e8",
    description: "New Dress",
    amount: 29.99,
    date: new Date("2023-10-25"),
  },
  {
    id: "e9",
    description: "New Skirt",
    amount: 19.99,
    date: new Date("2023-09-27"),
  },
  {
    id: "e10",
    description: "New Blouse",
    amount: 14.99,
    date: new Date("2023-08-29"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
