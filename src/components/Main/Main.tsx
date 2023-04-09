import React from 'react';
import './Main.css';
import SearchBar from '../Utils/SearchBar';
import Header from '../Header/Header';
import RickAndMorty from '../Utils/RickAndMorty';

export default function Main() {
  return (
    <>
      <Header />
      <SearchBar />
      <RickAndMorty />
    </>
  );
}
