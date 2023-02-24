import React from 'react';
import { Form } from 'react-router-dom';
import './books.css';

function BookAdd() {
  return (
    <div>
      <h2 className="formheading">ADD NEW BOOK</h2>

      <Form className="form">
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
      </Form>
    </div>
  );
}

export default BookAdd;
