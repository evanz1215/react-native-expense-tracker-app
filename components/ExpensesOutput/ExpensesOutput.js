import { View } from "react-native";

import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "New Shoes",
    amount: 99.99,
    Date: new Date("2024-05-11"),
  },
  {
    id: "e2",
    description: "New Shirt",
    amount: 11.99,
    Date: new Date("2024-04-13"),
  },
  {
    id: "e3",
    description: "New Pants",
    amount: 39.99,
    Date: new Date("2024-03-15"),
  },
  {
    id: "e4",
    description: "New Hat",
    amount: 19.99,
    Date: new Date("2024-02-17"),
  },
  {
    id: "e5",
    description: "New Socks",
    amount: 5.99,
    Date: new Date("2024-01-19"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;
