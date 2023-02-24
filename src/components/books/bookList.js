import React from 'react';
import PropTypes from 'prop-types';
import './books.css';

function BookList({ List: { title, author } }) {
  return (
    <div className="bookli">
      <div className="main">
        <h2>{title}</h2>
        <p className="bookAuthor">{author}</p>
      </div>
      <div className="list">
        <a href="/comment" className="comment">
          Comments
        </a>

        <a href="/remove" className="comment">
          Remove
        </a>

        <a href="/edit" className="edit">
          Edit
        </a>
      </div>
    </div>
  );
}

BookList.defaultProps = {
  List: null,
};

BookList.propTypes = {
  List: null,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default BookList;
