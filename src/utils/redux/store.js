import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "./chatSlice";
import menuSlice from "./menuSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    menu: menuSlice,
    search: searchSlice,
    chat: chatSlice,
  },
});

export default store;
