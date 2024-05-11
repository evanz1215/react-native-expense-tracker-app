import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://react-native-expense-tra-98783-default-rtdb.asia-southeast1.firebasedatabase.app",
});

export function storeExpense(expenseData) {
  instance.post(`/expenses.json`, expenseData);
}
