import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function Category() {
  const { category } = useSelector((state) => state.category);
  const [searchField, setSearchField] = useState('');
  const [filterResult, setFilterResult] = useState(category);

  const filterHandler = () => {
    setFilterResult(
      filterResult.map((item) => item.country.includes(searchField)),
    );
  };

  return (
    <div className="categories">
      <input
        type="text"
        value={searchField}
        onChange={(e) => setSearchField(e.target.value)}
      />
      <button className="cat" type="button" onClick={filterHandler}>
        Filter
      </button>
    </div>
  );
}

export default Category;
