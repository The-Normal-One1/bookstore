import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/books/homePage';
import Category from './components/books/categories';
import Nav from './components/navBar/navBar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
