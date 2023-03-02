import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    isMenuOpen: true,
  },

  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { toggleMenu, closeMenu } = menuSlice.actions;
export default menuSlice.reducer;
