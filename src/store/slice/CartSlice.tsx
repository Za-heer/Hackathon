import React from 'react';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const CartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addCart(state: any, action) {
      let myindex = -1;
      state.map((item: any, index: any) => {
        if (item.id == action.payload.id) {
          myindex = index;
        }
      });
      if (myindex == -1) {
        state.push({
          name: action.payload.name,
          uri: action.payload.uri,
          qty: action.payload.qty,
          price: action.payload.price,
          id: action.payload.id,
        });
      } else {
        state[myindex].qty = state[myindex].qty + 1;
      }
    },

    removeCart(state: any, action: any) {
      let myindex = -1;
      state.map((item: any, index: any) => {
        if (item.id == action.payload.id) {
          myindex = index;
        }
      });
      if (myindex == -1) {
      } else {
        state[myindex].qty = state[myindex].qty - 1;
      }
    },
    deleteCart(state: any, action: any) {
      return (state = state.filter((item: any) => item.id !== action.payload));
    },
  },
});

export const {addCart, removeCart, deleteCart} = CartSlice.actions;
export default CartSlice.reducer;
