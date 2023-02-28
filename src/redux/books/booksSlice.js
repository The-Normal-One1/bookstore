/* eslint no-param-reassign: ["error", { "props": false }] */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookLists: [],
};

const bookSlice = createSlice({
  name: 'bookList',
  initialState,
  reducers: {
    addBook: (state, actions) => {
      const bookId = actions.payload;
      state.bookLists = [...state.bookLists, bookId];
    },

    removeBook: (state, actions) => {
      const bookId = actions.payload;
      state.bookLists = state.bookLists.filter((book) => book.id !== bookId);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
