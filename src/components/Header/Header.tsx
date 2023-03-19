import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default class Header extends React.Component {
  render() {
    const urlData = document.location.href;
    const url = urlData.split('/').slice(-1).toString();
    const page = url ? 'ABOUT US' : 'MAIN';

    return (
      <header className="header">
        <Link className="header__link main" to="/">
          Main
        </Link>
        <Link className="header__link about-us" to="/aboutus">
          About Us
        </Link>
        <span className="page-name">Page: {page}</span>
      </header>
    );
  }
}
