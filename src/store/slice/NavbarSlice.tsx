import React from 'react';
import {createSlice} from '@reduxjs/toolkit';
const NavbarSlice = createSlice({
  name: 'navbar',
  initialState: false,
  reducers: {
    updateNav(state: any, action) {
      state.push(action.payload);
    },
  },
});
export const {updateNav} = NavbarSlice.actions;
export default NavbarSlice.reducer;
