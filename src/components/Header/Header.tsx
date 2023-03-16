import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Link className="header__link main" to="/">
          Main
        </Link>
        <Link className="header__link about-us" to="/aboutus">
          About Us
        </Link>
      </header>
    );
  }
}
