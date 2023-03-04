import React from 'react';
import { Link } from 'react-router-dom';
import { BiUserCircle } from 'react-icons/bi';
import './navBar.css';

function Nav() {
  return (
    <div className="nav">
      <ul className="nav-links">
        <Link to="/" className="logo">
          BookStore CMS
        </Link>
        <li>
          <Link to="/" className="links">
            Books
          </Link>
        </li>
        <li>
          <Link to="/category" className="links-cate">
            Categories
          </Link>
        </li>
      </ul>
      <ul className="icon">
        <li>
          <Link to="/icon" className="user">
            <BiUserCircle />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
