import React from 'react';
import { Link } from 'react-router-dom';
import { BiUserCircle } from 'react-icons/bi';
import './navBar.css';

function Nav() {
  return (
    <div className="nav">
      <ul className="nav-links">
        <a href="/" className="logo">
          BookStore CMS
        </a>
        <li>
          <Link to="/" className="links">
            Books
          </Link>
        </li>
        <li>
          <Link to="/category" className="links">
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
