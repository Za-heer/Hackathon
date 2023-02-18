import {View, Text} from 'react-native';
import React from 'react';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {myApi} from '../../data/Api';

const ProductSlice = createSlice({
  name: 'product',
  initialState: [],
  reducers: {
    addProduct(state: any, action) {
      state.push(action.payload);
    },
  },
});
export const {addProduct} = ProductSlice.actions;
export default ProductSlice.reducer;

// console.log(ProductSlice.reducer);
