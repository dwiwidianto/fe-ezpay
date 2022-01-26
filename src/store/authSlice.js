import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { accessToken: "" },
  reducers: {
    login: (state, action) => {
      const { accessToken } = action.payload;
      return { accessToken };
    },
    logout: () => {
      return { accessToken: "" };
    },
  },
});

export const { actions, reducer: authReducer } = authSlice;
export const { login, logout } = actions;
export default authReducer;
