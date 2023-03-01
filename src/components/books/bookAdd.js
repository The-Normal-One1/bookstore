import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/booksSlice';
import './books.css';

function BookAdd() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const book = {
    item_id: '',
    title: '',
    author: '',
  };

  const resetInput = () => {
    setTitle('');
    setAuthor('');
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (title && author) {
      dispatch(
        addBook({
          ...book,
          item_id: uuidv4(),
          title,
          author,
        }),
      );
      resetInput();
    }
  };

  return (
    <div>
      <h2 className="formheading">ADD NEW BOOK</h2>
      <form onSubmit={submitHandler} className="form">
        <input
          className="inpField"
          type="text"
          placeholder="Book Title"
          name="Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        />
        <input
          className="inpField"
          type="text"
          placeholder="Book Author"
          name="Author"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
          required
        />
        <button className="btn" type="submit">
          ADD BOOK
        </button>
      </form>
    </div>
  );
}

export default BookAdd;
