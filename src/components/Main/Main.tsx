import React from 'react';
import './Main.css';

export default class Main extends React.Component {
  render() {
    return (
      <div className="text-field">
        <label className="text-field__label" htmlFor="search">
          Search
        </label>
        <div className="text-field__group">
          <input className="text-field__input" type="search" id="search" name="search" />
          <button className="text-field__btn" type="button">
            Search
          </button>
        </div>
      </div>
    );
  }
}
