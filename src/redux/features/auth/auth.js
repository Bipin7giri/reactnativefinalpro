/** @format */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  isLogedIn: false,
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    loginIn: (state, action) => {
      state.user = [...state.user, ...action.payload];
      state.isLogedIn = true;
    },
  },
});

export const { loginIn } = authSlice.actions;
export default authSlice.reducer;
