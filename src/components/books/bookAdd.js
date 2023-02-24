import React from 'react';
import './books.css';

function BookAdd() {
  return (
    <div>
      <h2 className="formheading">ADD NEW BOOK</h2>

      <form className="form">
        <input
          className="inpField"
          type="text"
          placeholder="Book Title"
          name="Title"
        />
        <input
          className="inpField"
          type="text"
          placeholder="Book Author"
          name="Author"
        />
        <button className="btn" type="submit">
          ADD BOOK
        </button>
      </form>
    </div>
  );
}

export default BookAdd;
