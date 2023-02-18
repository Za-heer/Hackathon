import React from 'react';
import {configureStore} from '@reduxjs/toolkit';
import ProductReducer from './slice/ProductSlice';
import cartReducer from './slice/CartSlice';
import NavbarReducer from './slice/NavbarSlice';
export const store = configureStore({
  reducer: {
    product: ProductReducer,
    cart: cartReducer,
    navbar: NavbarReducer,
  },
});
