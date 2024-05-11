import { createContext, useReducer, useState } from "react";

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

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (expenseId) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );

      const updatableExpense = state[updatableExpenseIndex];
      const updatedExpense = {
        ...updatableExpense,
        ...action.payload.data,
      };

      const updatedExpenses = [...state];

      updatedExpenses[updatableExpenseIndex] = updatedExpense;

      return updatedExpenses;

    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expenseState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id, data: expenseData } });
  }

  const value = {
    expenses: expenseState,
    addExpense,
    deleteExpense,
    updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
