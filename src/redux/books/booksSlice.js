/* eslint no-param-reassign: ["error", { "props": false }] */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  listBooks: [
    {
      item_id: 1,
      title: "The Daughter's Tale",
      author: 'Armando Lucas Correa',
    },
    {
      item_id: 2,
      title: 'Himself',
      author: 'Jess Kidd',
    },
    {
      item_id: 3,
      title: 'Gorgeous Lies',
      author: 'Martha McPhee',
    },
    {
      item_id: 4,
      title: 'All the Missing Girls',
      author: 'Megan Miranda',
    },
  ],
};

const bookSlice = createSlice({
  name: 'bookList',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const bookId = action.payload;
      state.listBooks = [...state.listBooks, bookId];
    },

    removeBook: (state, action) => {
      const bookId = action.payload;
      const result = state.listBooks.filter((book) => book.item_id !== bookId);
      return {
        listBooks: result,
      };
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
