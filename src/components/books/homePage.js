import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookAdd from './bookAdd';
import BookList from './bookList';
import { getBookData } from '../../redux/books/booksSlice';

function Home() {
  const dispatch = useDispatch();
  const { listBooks, isLoading } = useSelector((state) => state.book);

  useEffect(() => {
    dispatch(getBookData());
  }, [dispatch]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (listBooks.length === 0) {
    return (
      <>
        <h1 className="no-book">No Books to Display</h1>
        <hr className="hr" />
        <BookAdd />
      </>
    );
  }

  return (
    <div className="parent">
      {listBooks.map((book) => (
        <BookList key={book.item_id} List={book} id={book.item_id} />
      ))}
      <hr className="hr" />
      <BookAdd />
    </div>
  );
}

export default Home;
