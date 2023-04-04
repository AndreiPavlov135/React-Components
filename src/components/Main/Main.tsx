import React from 'react';
import './Main.css';
import SearchBar from '../Utils/SearchBar';
import Header from '../Header/Header';
import Cards from '../Utils/Cards';

export default function Main() {
  return (
    <>
      <Header />
      <SearchBar />
      <Cards />
    </>
  );
}
