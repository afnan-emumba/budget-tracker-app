import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import userReducer from "./slices/usersSlice";
import expensesReducer from "./slices/expensesSlice";
import notificationsReducer from "./slices/notificationsSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "expenses", "notifications"],
};

const rootReducer = combineReducers({
  user: userReducer,
  expenses: expensesReducer,
  notifications: notificationsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor };
