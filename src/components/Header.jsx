import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-logo">Oleksandra</div>
      <nav className="header-nav">
        <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          Про мене
        </NavLink>
        <NavLink to="/my-city" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          Місто
        </NavLink>
        <NavLink to="/my-future" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          Розвиток
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;