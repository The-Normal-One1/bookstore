/* eslint no-param-reassign: ["error", { "props": false }] */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/J5jJJs036gOWzOau23Ql/books';

const initialState = {
  listBooks: [],
  isLoading: false,
  status: 'idle',
};

export const postBook = createAsyncThunk(
  'listBooks/postBookData',
  async (bookData, thunkAPI) => {
    try {
      const response = await axios.post(API_URL, bookData);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue({ error: e.message });
    }
  },
);

export const getBookData = createAsyncThunk(
  'listBooks/getBookData',
  async (listBooks, thunkAPI) => {
    try {
      const response = await axios.get(API_URL, listBooks);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue({ error: e.message });
    }
  },
);

export const deleteBook = createAsyncThunk(
  'listBooks/deteteBook',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue({ error: e.message });
    }
  },
);

const bookSlice = createSlice({
  name: 'bookList',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const bookId = action.payload;
      // state.listBooks = [...state.listBooks, bookId];
      state.listBooks.push(bookId);
    },

    removeBook: (state, action) => {
      const bookId = action.payload;
      state.listBooks = state.listBooks.filter(
        (book) => book.item_id !== bookId,
      );
      // return {
      //   listBooks: result,
      // };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(postBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postBook.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(postBook.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getBookData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getBookData.fulfilled, (state, action) => {
        const responseObject = action.payload;
        const newBookArr = Object.keys(responseObject).map((id) => {
          const bookObj = responseObject[id][0];
          bookObj.item_id = id;
          return bookObj;
        });
        state.isLoading = false;
        state.status = 'succeeded';
        state.listBooks = newBookArr;
      });
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
