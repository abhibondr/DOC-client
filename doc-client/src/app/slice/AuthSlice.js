import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser: (state, { payload }) => payload,
    removeUser: () => ({}),
  },
});
export const { addUser, removeUser } = authSlice.actions;
export const selectAuth = (state) => state.loggedUser;
export default authSlice.reducer;
