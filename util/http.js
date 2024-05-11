import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://react-native-expense-tra-98783-default-rtdb.asia-southeast1.firebasedatabase.app",
});

export async function storeExpense(expenseData) {
  const response = await instance.post("/expenses.json", expenseData);
  const id = response.data.name;

  return id;
}

export async function fetchExpenses() {
  const response = await instance.get("/expenses.json");
  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };

    expenses.push(expenseObj);
  }

  return expenses;
}
