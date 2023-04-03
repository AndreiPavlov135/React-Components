import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const location = useLocation();
  const url = location.pathname.split('/').slice(-1).toString();
  const page = url ? url : 'main';
  return (
    <header className="header">
      <Link className="header__link main" to="/">
        Main
      </Link>
      <Link className="header__link about-us" to="/about-us">
        About Us
      </Link>
      <Link className="header__link" to="/forms">
        Forms
      </Link>
      <span className="page-name">Page: {page}</span>
    </header>
  );
}
