import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { Expense, ExpensesState } from "../../utils/interfaces";

const initialState: ExpensesState = {
  expenses: [
    {
      key: 1,
      userId: 1,
      expense: "Groceries",
      price: "800",
      date: "2024-12-01",
    },
    {
      key: 2,
      userId: 1,
      expense: "Utilities",
      price: "6000",
      date: "2024-12-02",
    },
    {
      key: 3,
      userId: 1,
      expense: "House Rent",
      price: "12000",
      date: "2024-09-03",
    },
  ],
};

const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<Expense>) => {
      state.expenses.push(action.payload);
    },
    updateExpense: (
      state,
      action: PayloadAction<Partial<Expense> & { key: number }>
    ) => {
      const index = state.expenses.findIndex(
        (expense) => expense.key === action.payload.key
      );
      if (index !== -1) {
        state.expenses[index] = { ...state.expenses[index], ...action.payload };
      }
    },
    deleteExpense: (state, action: PayloadAction<number>) => {
      state.expenses = state.expenses.filter(
        (expense) => expense.key !== action.payload
      );
    },
  },
});

const persistConfig = {
  key: "expenses",
  storage,
};

const persistedExpensesReducer = persistReducer(
  persistConfig,
  expensesSlice.reducer
);

export const { addExpense, updateExpense, deleteExpense } =
  expensesSlice.actions;
export default persistedExpensesReducer;
