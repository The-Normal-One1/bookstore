import React from 'react';
import { useSelector } from 'react-redux';
import BookAdd from './bookAdd';
import BookList from './bookList';

function Home() {
  const { listBooks } = useSelector((state) => state.book);
  return (
    <div className="parent">
      {listBooks.map((book) => (
        <BookList key={book.item_id} List={book} />
      ))}
      <hr className="hr" />
      <BookAdd />
    </div>
  );
}

export default Home;
