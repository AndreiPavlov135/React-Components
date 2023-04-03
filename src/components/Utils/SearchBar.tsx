import React, { useEffect, useState } from 'react';
import './Utils-styles/Search-bar.css';

export default function SearchBar() {
  const [inputValue, setInputValue] = useState('');

  function getInputValue(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setInputValue(e.target.value);
  }

  useEffect(() => {
    return () => {
      localStorage.value = inputValue;
    };
  });

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
          defaultValue={localStorage.value}
          onChange={(e) => getInputValue(e)}
        />
        <button className="search-field__btn" type="button">
          Search
        </button>
      </form>
    </div>
  );
}
