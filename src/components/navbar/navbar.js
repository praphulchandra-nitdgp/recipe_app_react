import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faMagnifyingGlass, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';

const Navbar = ({ updateSearch, getSearch, search }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header>
      <div className="navbar">

        <button className={`navbar-menu-btn ${isMenuOpen ? 'hidden' : ''}`} id="menu-btn" onClick={toggleMenu} >
          <i className='fa-bars'><FontAwesomeIcon icon={faBars}/></i>
        </button>
        <button className={`navbar-menu-close-btn `} id="close-btn" onClick={toggleMenu} style={{ display: isMenuOpen ? 'block' : 'none' }}>
          <i className='fa-times'><FontAwesomeIcon icon={faTimes}/></i>
        </button>

        <a href="#"><h1 className="navbar-brand"><FontAwesomeIcon icon={faUtensils}/> Recipe</h1></a>
        <nav>
          <ul className={`navbar-nav ${isMenuOpen ? 'active' : ''}`}>
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
