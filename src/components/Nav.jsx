import React from 'react';
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import { Link } from 'react-router-dom'


export default function Nav({onSearch}) {
  return (
    <header className="header">
      <Link to='/'>
        <div>
          <h5>Henry - Wheater App</h5>
        </div>
      </Link>
      <Link to='/about'>
        <span>About</span>
      </Link>
      <div>
        <SearchBar onSearch={onSearch}/>
      </div>
    </header>
  );
};
