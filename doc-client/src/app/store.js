import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    loggedUser: null,
  },
});

export default store;
