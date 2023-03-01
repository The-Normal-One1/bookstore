/* eslint no-param-reassign: ["error", { "props": false }] */
import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    checkStatus: () => 'Under construction',
  },
});

export const { checkStatus } = categorySlice.actions;
export default categorySlice.reducer;
