import React from 'react';
import PropTypes from 'prop-types';
import './books.css';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/booksSlice';

function BookList({ List }) {
  const { title, author } = List;
  const dispatch = useDispatch();

  return (
    <div className="bookli">
      <div className="main">
        <h2>{title}</h2>
        <p className="bookAuthor">{author}</p>
      </div>
      <div className="list">
        <button type="button" className="comment">
          Comments
        </button>

        <button
          type="button"
          className="comment"
          onClick={() => dispatch(removeBook(List.item_id))}
        >
          Remove
        </button>

        <button type="button" className="edit">
          Edit
        </button>
      </div>
    </div>
  );
}

BookList.defaultProps = {
  item_id: '',
  List: null,
};

BookList.propTypes = {
  List: null,
  item_id: PropTypes.string,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default BookList;
