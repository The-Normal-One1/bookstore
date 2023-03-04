import React from 'react';
import PropTypes from 'prop-types';
import './books.css';
import { useDispatch } from 'react-redux';
import { deleteBook, removeBook } from '../../redux/books/booksSlice';

function BookList({ List, id }) {
  const { title, author } = List;
  const dispatch = useDispatch();

  const removeHandler = (e) => {
    const { id } = e.target.dataset;
    dispatch(removeBook(id));
    dispatch(deleteBook(id));
  };

  return (
    <div className="bookli">
      <div className="book-item-left">
        <h2 className="category-name">Action</h2>
        <div className="main">
          <h2 className="book-title">{title}</h2>
          <p className="bookAuthor">{author}</p>
        </div>
        <div className="list">
          <button type="button" className="comment">
            Comments
          </button>
          <hr className="break-comment" />
          <button
            data-id={id}
            type="button"
            className="comment"
            onClick={removeHandler}
          >
            Remove
          </button>
          <hr className="break-comment" />
          <button type="button" className="edit">
            Edit
          </button>
        </div>
      </div>
      <div className="middle-view">
        <div className="view-percent">
          {' '}
          <div className="progress">
            <span
              className="title timer"
              data-from="0"
              data-to="35"
              data-speed="1800"
            >
              {/* 85 */}
            </span>
            <div className="overlay" />
            <div className="left" />
            <div className="right" />
          </div>
        </div>
        <div className="percent-info">
          <span className="-Percent-Complete">85%</span>
          <span className="Completed Text-Style-2">Completed</span>
        </div>
      </div>
      <hr className="hr-progress" />
      <div className="update-progress">
        <h3 className="current-chapter">CURRENT CHAPTER</h3>
        <h3 className="current-chapter-info">Chapter 17</h3>
        <button className="progress-btn" type="button">
          UPDATE PROGRESS
        </button>
      </div>
    </div>
  );
}

BookList.defaultProps = {
  List: {
    item_id: '',
    title: '',
    author: '',
  },
  id: '',
};

BookList.propTypes = {
  List: PropTypes.shape({
    item_id: PropTypes.string,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  id: PropTypes.string,
};

export default BookList;
