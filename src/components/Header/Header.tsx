import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default class Header extends React.Component {
  urlData = document.location.href;
  url = this.urlData.split('/').slice(-1).toString();
  state = { page: this.url || 'main' };
  changePage = (page: string) => {
    this.setState({ page });
  };
  render() {
    return (
      <header className="header">
        <Link className="header__link main" to="/">
          Main
        </Link>
        <Link
          className="header__link about-us"
          to="/about-us"
          onClick={() => this.changePage(this.url)}
        >
          About Us
        </Link>
        <Link className="header__link" to="/forms" onClick={() => this.changePage(this.url)}>
          Forms
        </Link>
        <span className="page-name">Page: {this.state.page}</span>
      </header>
    );
  }
}
