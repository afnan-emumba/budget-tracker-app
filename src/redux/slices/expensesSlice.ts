import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export interface Expense {
  key: number;
  userId: number;
  expense: string;
  price: string;
  date: string;
}

export interface ExpensesState {
  expenses: Expense[];
}

const initialState: ExpensesState = {
  expenses: [],
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
