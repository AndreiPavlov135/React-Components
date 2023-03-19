import React from 'react';
import './Utils-styles/Search-bar.css';

export default class SearchBar extends React.Component {
  inputValue = '';

  getInputValue(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    this.inputValue = e.target.value;
  }

  componentWillUnmount() {
    localStorage.value = this.inputValue;
  }

  render() {
    return (
      <div className="search-field">
        <label className="search-field__label" htmlFor="search">
          Search
        </label>
        <form className="search-field__group">
          <input
            className="search-field__input"
            type="search"
            id="search"
            name="search"
            onChange={(e) => this.getInputValue(e)}
          />
          <button className="search-field__btn" type="button">
            Search
          </button>
        </form>
        <span className="search-field__result">Input value: {localStorage.value}</span>
      </div>
    );
  }
}
