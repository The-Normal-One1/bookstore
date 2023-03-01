import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../../redux/categories/categoriesSlice';

function Category() {
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const handleClick = () => dispatch(checkStatus());
  return (
    <div className="categories-wrapper">
      <button className="cat" type="button" onClick={handleClick}>
        Check Status
      </button>
      <div>{category}</div>
    </div>
  );
}

export default Category;
