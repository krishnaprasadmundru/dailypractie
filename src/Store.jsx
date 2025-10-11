import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

// 🧠 Custom Middleware
const loggerMiddleware = (store) => (next) => (action) => {
  console.log("👉 Dispatching Action:", action.type);
  const result = next(action); // Pass the action to reducer
  console.log("📦 New State:", store.getState());
  return result;
};

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware), // add custom middleware
});

export default store;
