// userSlice.js

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../..";
import { User } from "@ui/shared/domain/authentication/entities/User";

export interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  user: null,
};

export const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    clear: () => ({ ...initialState }),
  },
});

export const { actions: authActions } = authSlice;

export const selectUser = (state: RootState) => state.auth.user;

export default authSlice.reducer;
