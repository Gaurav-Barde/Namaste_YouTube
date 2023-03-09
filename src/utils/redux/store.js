import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menuSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    menu: menuSlice,
    search: searchSlice,
  },
});

export default store;
