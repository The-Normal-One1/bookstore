import React from 'react';
import BookAdd from './bookAdd';
import BookList from './bookList';

function Home() {
  const listBooks = [
    {
      title: "The Daughter's Tale",
      author: 'Armando Lucas Correa',
      id: 1,
    },
    {
      title: 'Himself',
      author: 'Jess Kidd',
      id: 2,
    },
    {
      title: 'Gorgeous Lies',
      author: 'Martha McPhee',
      id: 3,
    },
    {
      title: 'All the Missing Girls',
      author: 'Megan Miranda',
      id: 4,
    },
  ];

  return (
    <div className="parent">
      {listBooks.map((item) => (
        <BookList key={item.id} List={item} />
      ))}
      <hr className="hr" />
      <BookAdd />
    </div>
  );
}

export default Home;
