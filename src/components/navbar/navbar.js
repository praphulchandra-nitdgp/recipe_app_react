import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';

const Navbar = ({ updateSearch, getSearch, search }) => {
  return (
    <header>
      <div className="navbar">
        <a href="#"><h1 className="navbar-brand"><FontAwesomeIcon icon={faUtensils}/> Recipe</h1></a>
        <nav>
          <ul className="navbar-nav">
            <li><a href="#" className="navbar-link">Home</a></li>
            <li><a href="#about-us" className="navbar-link">About Us</a></li>
          </ul>
        </nav>
        <div className="navbar-actions">
          <form onSubmit={getSearch} className="navbar-form">
            <input 
              type="text" 
              name="search" 
              className="navbar-form-search" 
              value={search}
              onChange={updateSearch}
            />
            <button type="submit" className="navbar-form-btn">
              <i><FontAwesomeIcon icon={faMagnifyingGlass}/></i>
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
