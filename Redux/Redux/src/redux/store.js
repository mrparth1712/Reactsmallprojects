import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoslice"; // ✅ import reducer

export const store = configureStore({
  reducer: {
    todo: todoReducer, // ✅ key must match what you use in useSelector
  },
});
