
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import resourcesReducer from "./slices/resources";

const store = configureStore({
  reducer: {
    auth: authReducer,
    resources: resourcesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store;